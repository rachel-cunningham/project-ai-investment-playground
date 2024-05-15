const knex = require("../db/connection");

function create(newUser){
    return knex("users")
    .insert(newUser)
    .returning("*")
    .then((res)=> res[0])
}

async function list() {
    return knex("users")
        .select("*")
}

function readUser(username) {
    return knex("users")
        .select("*")
        .where({ username: username })
        .first();
}

module.exports = {
    create,
    list,
    readUser
};