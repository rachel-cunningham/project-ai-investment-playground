const knex = require("../db/connection");

// list all of the information from goals, ordered by goal name
function list() {
    return knex("goals").select("*").orderBy("goal_id");
}

// create a new goal
function create(goal) {
    return knex("goals")
        .insert(goal)
        .returning("*")
        .then((createdGoals) => createdGoals[0]);
}

// find a single goal given goal id
function read(goal_id) {
    return knex("goals").select("*").where({ goal_id }).first();
}

module.exports = {
    list,
    create,
    read,
};
