const asyncErrorBoundary = require("../errors/asyncErrorBoundary");
const hasProperties = require("../utils/hasProperties");
const goalsService = require("./goals.service");
const authenticateToken = require("../authentication/authenticateToken");
const gptController = require("../gpt/gpt.controller");
const validateInput = require("../utils/validateInput");

/*
 * Validation middleware
 */

// Check if goal with goal_id exists
async function goalExists(req, res, next) {
    const { goalId } = req.params;
    const { userId } = req.user;

    try {
        const goal = await goalsService.read(goalId, userId);

        if (goal) {
            res.locals.goal = goal;
            return next();
        } else {
            next({
                status: 404,
                message: `Goal with id ${goalId} does not exist for user with id ${userId}.`,
            });
        }
    } catch (error) {
        console.log(error);
    }
}

// Check if the userId in params matches with the userId of the authorized user (aka the user that is logged in)
function doesAuthorizedUserIdMatchUserIdInParams(req, res, next) {
    console.log("PARAMS:", req.params);
    const paramsUserId = Number(req.params.userId);
    console.log("REQ.USER:", req.user);
    const { userId } = req.user;

    if (paramsUserId === userId) {
        return next();
    } else {
        next({
            status: 401,
            message: `User with id ${paramsUserId} is not authorized`,
        });
    }
}

const VALID_PROPERTIES = [
    "goal_name",
    "expected_return_on_investment",
    "years_to_invest_for",
    "risk_comfort_level",
    "starting_amount_to_invest",
];

// checks whether the request body contains a specified set of allowed fields from the given valid properties array
function hasOnlyValidProperties(req, res, next) {
    const { data = {} } = req.body;

    const invalidFields = Object.keys(data).filter(
        (field) => !VALID_PROPERTIES.includes(field)
    );

    if (invalidFields.length) {
        return next({
            status: 400,
            message: `Invalid field(s): ${invalidFields.join(", ")}`,
        });
    }
    next();
}

// checks inputs for validity
function isValidPlan(req, res, next) {
    const {
        goal_name,
        risk_comfort_level,
        expected_return_on_investment,
        starting_amount_to_invest,
        years_to_invest_for,
    } = req.body.data;

    // goal_name is at least 2 characters long
    if (goal_name.length < 2) {
        next({
            status: 400,
            message: "The plan name must be at least 2 characters long.",
        });
    }

    // expected_return_on_investment, starting_amount_to_invest, and years_to_invest_for has input that is a number, not string
    if (
        !Number.isInteger(expected_return_on_investment) ||
        !Number.isInteger(starting_amount_to_invest) ||
        !Number.isInteger(years_to_invest_for)
    ) {
        next({
            status: 400,
            message:
                "The return on investment, initial investment amount, and years to invest for field must all be a number.",
        });
    }

    // expected_return_on_investment, starting_amount_to_invest, and years_to_invest_for has input that is a value of at least 1
    if (
        expected_return_on_investment < 1 ||
        starting_amount_to_invest < 1 ||
        years_to_invest_for < 1
    ) {
        next({
            status: 400,
            message:
                "The return on investment, initial investment amount, and years to invest for field must all have a value of at least 1.",
        });
    }

    // checks that risk_comfort_level is one of 3 options: low, medium, or high
    if (
        risk_comfort_level.toLowerCase() !== "low" &&
        risk_comfort_level.toLowerCase() !== "medium" &&
        risk_comfort_level.toLowerCase() !== "high"
    ) {
        next({
            status: 400,
            message:
                "The risk comfort level must be one of the following: low, medium, or high.",
        });
    }
    next();
}

/* ---- CRUDL ---- */

/**
 * List handler for goal resources
 */

async function list(req, res, next) {
    const { userId } = req.user;
    try {
        const data = await goalsService.list(userId);
        res.json({ data });
    } catch (error) {
        next({
            status: 500,
            message: `Error reading all user plans: ${error}`,
        });
    }
}

/*
 * Create handler for goal
 */
async function create(req, res, next) {
    const { userId } = req.user;

    try {
        const aiResponse = await gptController.sendPrompt(req, res, next); // Sends a prompt with user input to chatGPT and returns the response
        let goalsToSendToDatabase = req.body.data; // Stores the goals from the request body in an object I can mess with
        goalsToSendToDatabase["ai_response"] = aiResponse; // Nests the response object from chatGPT in the goals object from request as the property "ai_response"

        let createdGoal = await goalsService.create(
            goalsToSendToDatabase,
            userId
        );

        res.status(201).json({ data: createdGoal });
    } catch (error) {
        next({
            status: 500,
            message: `Error creating new user plan: ${error}`,
        });
    }
}

/*
 * Read handler for goal
 */

function read(req, res, next) {
    const data = res.locals.goal;
    res.json({ data });
}

function patchChangesAiParameters(updatedGoal) {
    return (
        Object.keys(updatedGoal).includes("years_to_invest_for") ||
        Object.keys(updatedGoal).includes("starting_amount_to_invest")
    );
}

/*
 * Update goal info
 */
async function update(req, res, next) {
    const { goal_id } = res.locals.goal;
    let updatedGoal = {
        ...req.body.data,
        goal_id,
    };

    if (patchChangesAiParameters(updatedGoal)) {
        // Get a new plan from the ai based on new goals
        try {
            const aiResponse = await gptController.sendPrompt(req, res, next); // Sends a prompt with user input to chatGPT and returns the response
            updatedGoal["ai_response"] = aiResponse; // Nests the response object from chatGPT in the goals object from request as the property "ai_response"
        } catch (error) {
            next({
                status: 500,
                message: `Error updating AI response: ${error}`,
            });
        }
    }

    try {
        const data = await goalsService.update(updatedGoal);
        res.json({ data });
    } catch (error) {
        next({
            status: 500,
            message: `Error updating user plan: ${error}`,
        });
    }
}

/*
 * Delete a user goal
 */
async function destroy(req, res, next) {
    console.log("PARAMS:", req.params);
    const { goal_id } = res.locals.goal;

    try {
        await goalsService.destroy(goal_id);
        console.log("Plan deleted!");
        res.sendStatus(204);
    } catch (error) {
        next({
            status: 500,
            message: `Error deleting user plan: ${error}`,
        });
    }
}

module.exports = {
    list: [
        authenticateToken,
        doesAuthorizedUserIdMatchUserIdInParams,
        asyncErrorBoundary(list),
    ],
    create: [
        authenticateToken,
        doesAuthorizedUserIdMatchUserIdInParams,
        hasProperties(
            "goal_name",
            "expected_return_on_investment",
            "years_to_invest_for",
            "risk_comfort_level",
            "starting_amount_to_invest"
        ),
        hasOnlyValidProperties,
        isValidPlan,
        asyncErrorBoundary(create),
    ],
    read: [
        authenticateToken,
        doesAuthorizedUserIdMatchUserIdInParams,
        asyncErrorBoundary(goalExists),
        read,
    ],
    update: [
        authenticateToken,
        doesAuthorizedUserIdMatchUserIdInParams,
        asyncErrorBoundary(goalExists),
        hasProperties(
            "goal_name",
            "expected_return_on_investment",
            "years_to_invest_for",
            "risk_comfort_level",
            "starting_amount_to_invest"
        ),
        // validateInput,
        hasOnlyValidProperties,
        isValidPlan,
        asyncErrorBoundary(update),
    ],
    destroy: [
        authenticateToken,
        doesAuthorizedUserIdMatchUserIdInParams,
        asyncErrorBoundary(goalExists),
        asyncErrorBoundary(destroy),
    ],
};
