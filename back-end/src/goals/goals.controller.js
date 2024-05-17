const asyncErrorBoundary = require("../errors/asyncErrorBoundary");
const hasProperties = require("../utils/hasProperties");
const goalsService = require("./goals.service");

/*
 * Validation middleware
 */

// check if goal with goal_id exists
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
    try {
        const data = await goalsService.list();
        res.json({ data });
    } catch (error) {
        next(error);
    }
}

/*
 * Create a new goal
 */
async function create(req, res, next) {
    const { userId } = req.user;

    try {
        const data = await goalsService.create(req.body.data, userId);
        res.status(201).json({ data });
    } catch (error) {
        next(error);
    }
}

/*
 * Get info on one goal given goal id
 */

function read(req, res, next) {
    const data = res.locals.goal;
    res.json({ data });
}

module.exports = {
    list: asyncErrorBoundary(list),
    create: [
        hasProperties(
            "goal_name",
            "goal_statement",
            "years_to_invest_for",
            "risk_comfort_level",
            "starting_amount_to_invest"
        ),
        asyncErrorBoundary(create),
    ],
    read: [asyncErrorBoundary(goalExists), read],
};
