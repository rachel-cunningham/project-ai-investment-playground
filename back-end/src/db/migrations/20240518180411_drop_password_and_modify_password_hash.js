/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.table("users", (table) => {
        table.dropColumn("password");
        table.string("password_hash").notNullable().alter();
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema
        .table("users", (table) => {
            table.string("password");
            table.string("password_hash").nullable().alter();
        })
        .then(() => {
            return knex("users")
                .update({ password: "default_password" })
                .whereNull("password");
        })
        .then(() => {
            return knex.schema.table("users", (table) => {
                table.string("password").notNullable().alter();
            });
        });
};
