const knex = require("../db/connection");

// List all of the goals and order by goal_id
// Ideally this will be grouped by user_id in the future
function list() {
    return knex("goals").select("*").orderBy("goal_id");
}

// Create a new goal
function create(goal, userId) {
    return knex("goals")
        .insert(goal)
        .returning("*")
        .then((createdGoals) => createdGoals[0]);
}

// Get information on a single goal given goal_id
function read(goal_id, userId) {
    return knex("goals").select("*").where({ goal_id }).first();
}

module.exports = {
    list,
    create,
    read,
};
