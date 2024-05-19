const asyncErrorBoundary = require("../errors/asyncErrorBoundary");
const hasProperties = require("../utils/hasProperties");
const goalsService = require("./goals.service");
const authenticateToken = require("../authentication/authenticateToken");

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
        const data = await goalsService.create(req.body.data, userId);
        res.status(201).json({ data });
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

/*
 * Update goal info
 */
async function update(req, res, next) {
    const { goal_id } = res.locals.goal;

    const updatedGoal = {
        ...req.body.data,
        goal_id,
    };

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
        asyncErrorBoundary(update),
    ],
    destroy: [
        authenticateToken,
        asyncErrorBoundary(goalExists),
        asyncErrorBoundary(destroy),
    ],
};
