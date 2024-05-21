/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.table("goals", (table) => {
        table.dropColumn("goal_statement");
        table.integer("expected_return_on_investment").notNullable();
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.table("goals", (table) => {
        table.string("goal_statement").notNullable();
        table.dropColumn("expected_return_on_investment");
    });
};
