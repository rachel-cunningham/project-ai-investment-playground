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

function readUser(userId) {
    return knex("users")
        .select("*")
        .where({ user_id: userId })
        .first();
}

function readUserByUsername(username) {
    return knex("users")
        .select("*")
        .where({ username: username })
        .first();
}

function update(updatedUser) {
    return knex("users")
        .where({ user_id: updatedUser.user_id})
        .update(updatedUser, "*")
}

async function deleteUser(user_id) {
    try {
        await knex.transaction(async trx => {
            await trx("users").where({ user_id: user_id }).del()
            await trx("goals").where({ user_id: user_id }).del()
        })
        return "User was successfully deleted."
    } catch (error) {
        console.error(error)
        return "Failed to delete user"
    }
}


module.exports = {
    create,
    list,
    readUser,
    readUserByUsername,
    update,
    deleteUser
};