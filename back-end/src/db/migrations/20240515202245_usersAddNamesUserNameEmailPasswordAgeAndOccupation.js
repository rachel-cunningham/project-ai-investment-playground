/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.table("users", (table) => {
        table.string("first_name").notNullable();
        table.string("last_name").notNullable();
        table.string("username").notNullable().unique();
        table.string("email").notNullable().unique();
        table.string("password").notNullable();// remove
        table.string("password_hash"); // notnullable
        table.integer("age").notNullable();
        table.string("occupation").notNullable();
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.table("users", (table) => {
        table.dropColumn("first_name");
        table.dropColumn("last_name");
        table.dropColumn("username");
        table.dropColumn("email");
        table.dropColumn("password");
        table.dropColumn("password_hash");
        table.dropColumn("age");
        table.dropColumn("occupation");
    });
};
