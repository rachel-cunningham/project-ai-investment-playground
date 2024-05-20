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
    const goal = await goalsService.read(goalId);
    if (goal) {
        res.locals.goal = goal;
        return next();
    } else {
        next({
            status: 404,
            message: `Goal with id ${goalId} does not exist.`,
        });
    }
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
            message: `Error reading all user goals: ${error}`,
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
            message: `Error creating goal: ${error}`,
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
            message: `Error updating user goal: ${error}`,
        });
    }
}

/*
 * Delete a user goal
 */
async function destroy(req, res, next) {
    const { goal_id } = res.locals.goal;

    try {
        await goalsService.destroy(goal_id);
        console.log("Goal deleted!");
        res.sendStatus(204);
    } catch (error) {
        next({
            status: 500,
            message: `Error deleting user goal: ${error}`,
        });
    }
}

module.exports = {
    list: [authenticateToken, asyncErrorBoundary(list)],
    create: [
        authenticateToken,
        hasProperties(
            "goal_name",
            "goal_statement",
            "years_to_invest_for",
            "risk_comfort_level",
            "starting_amount_to_invest"
        ),
        validateInput,
        asyncErrorBoundary(create),
    ],
    read: [authenticateToken, asyncErrorBoundary(goalExists), read],
    update: [
        authenticateToken,
        asyncErrorBoundary(goalExists),
        hasProperties(
            "goal_name",
            "goal_statement",
            "years_to_invest_for",
            "risk_comfort_level",
            "starting_amount_to_invest"
        ),
        validateInput,
        asyncErrorBoundary(update),
    ],
    destroy: [
        authenticateToken,
        asyncErrorBoundary(goalExists),
        asyncErrorBoundary(destroy),
    ],
};
