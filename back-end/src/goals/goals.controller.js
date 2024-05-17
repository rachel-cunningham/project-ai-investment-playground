const asyncErrorBoundary = require("../errors/asyncErrorBoundary");
const hasProperties = require("../utils/hasProperties");
const goalsService = require("./goals.service");
const authenticateToken = require("../authentication/authenticateToken");

/*
 * Validation middleware
 */

// Check if goal with goal_id exists
async function goalExists(req, res, next) {
    const { goal_id } = req.params;
    const goal = await goalsService.read(goal_id);
    if (goal) {
        res.locals.goal = goal;
        return next();
    } else {
        next({
            status: 404,
            message: `Goal with id ${goal_id} does not exist.`,
        });
    }
}

/* ---- CRUD ---- */

/**
 * List handler for goal resources
 */

async function list(req, res, next) {
    const { userId } = req.user;
    try {
        const data = await goalsService.list(userId);
        res.json({ data });
    } catch (error) {
        next(error);
    }
}

/*
 * Create handler for goal
 */
async function create(req, res, next) {
    const { userId } = req.params; // this returns undefined for now, user_id will be "null" in table
    try {
        const data = await goalsService.create(req.body.data, userId);
        res.status(201).json({ data });
    } catch (error) {
        next(error);
    }
}

/*
 * Read handler for goal
 */

function read(req, res, next) {
    const data = res.locals.goal;
    res.json({ data });
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
};
