/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("users").del();
  await knex("users").insert([
    {
      first_name: "John",
      last_name: "Smith",
      username: "jsmith",
      email: "johnsmith@email.com",
      password: "securepassword",
      age: 30,
      occupation: "cook",
    },
  ]);
};
