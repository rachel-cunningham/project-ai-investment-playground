/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

const users = require("./01-users.json");

exports.seed = async function (knex) {
    // Deletes ALL existing entries
    await knex.raw('TRUNCATE TABLE users RESTART IDENTITY CASCADE');
    await knex("users").insert(users);
};
