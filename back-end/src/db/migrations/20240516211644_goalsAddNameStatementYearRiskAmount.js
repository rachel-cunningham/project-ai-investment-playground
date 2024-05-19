/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.up = function (knex) {
    return knex.schema.table("goals", (table) => {
        table.string("goal_name").notNullable();
        table.string("goal_statement").notNullable();
        table.integer("years_to_invest_for").notNullable(); // has to be string if we want "unsure" option
        table.string("risk_comfort_level").notNullable();
        table.integer("starting_amount_to_invest").notNullable();
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.table("goals", (table) => {
        table.dropColumn("goal_name");
        table.dropColumn("goal_statement");
        table.dropColumn("years_to_invest_for");
        table.dropColumn("risk_comfort_level");
        table.dropColumn("starting_amount_to_invest");
    });
};
