/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

const goals = require("./02-goals.json");

exports.seed = async function (knex) {
    // Deletes ALL existing entries
    await knex.raw('TRUNCATE TABLE goals RESTART IDENTITY CASCADE');
    await knex("goals").insert(goals);
};
