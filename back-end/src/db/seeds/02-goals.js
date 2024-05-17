/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

const goals = require("./02-goals.json");

exports.seed = async function (knex) {
    // Deletes ALL existing entries
    await knex("goals").del();
    await knex("goals").insert(goals);
};
