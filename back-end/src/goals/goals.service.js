const knex = require("../db/connection");

// List all of the goals and order by user_id
function list(userId) {
    return knex("goals")
        .select("*")
        .where({ user_id: userId })
        .orderBy("user_id");
}

// Create a new goal
function create(goal, userId) {
    goal.user_id = userId;

    return knex("goals")
        .insert(goal)
        .returning("*")
        .then((createdGoals) => createdGoals[0]);
}

// Get information on a single goal given goal_id
function read(goalId, userId) {
    return knex("goals")
        .select("*")
        .where(function () {
            this.where({ goal_id: goalId }).andWhere({ user_id: userId });
        })
        .first();
}

// Update goal
function update(updatedGoal) {
    return knex("goals")
        .select("*")
        .where({ goal_id: updatedGoal.goal_id })
        .update(updatedGoal, "*")
        .then((updatedRecords) => updatedRecords[0]);
}

// Delete goal
function destroy(goalId) {
    return knex("goals").where({ goal_id: goalId }).del();
}

module.exports = {
    list,
    create,
    read,
    update,
    destroy,
};
