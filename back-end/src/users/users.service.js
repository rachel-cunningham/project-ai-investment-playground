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

module.exports = {
    create,
    list
};