const asyncErrorBoundary = require("../errors/asyncErrorBoundary");
const hasProperties = require("../errors/hasProperties");
const service = require("./users.service");
const bcrypt = require('bcryptjs');

async function create(req, res, next){
    const {data: {first_name, last_name, username, email, password} = {}} = req.body

    const salt = await bcrypt.genSalt(10);
    const password_hash = await bcrypt.hash(password, salt);

    const newUser = {
        first_name,
        last_name,
        username,
        email,
        password,
        password_hash
    }

    const response = await service.create(newUser)
    res.status(201).json({ data: response })
}

async function list(req, res) {
    res.json({data: await service.list()});
}

// Validates that a user with the given username exists
async function userExists(req, res, next) {
    const { username } = req.params
    const data = await service.readUser(username)

    if (!data) {
        next({
            status: 404,
            message: `Username '${username}' does not exist` 
        })
    } else {
        res.locals.user = data
        next()
    }
}

// Get requests to /users/:username will return a single user - the whole row
function readUser(req, res, next) {
    const data = res.locals.user

    res.json({ data })
}

module.exports = {
    create: [
        asyncErrorBoundary(hasProperties("first_name")),
        asyncErrorBoundary(hasProperties("last_name")),
        asyncErrorBoundary(hasProperties("email")),
        asyncErrorBoundary(hasProperties("password")),
        asyncErrorBoundary(create)
    ],
    list: asyncErrorBoundary(list),
    read: [
        asyncErrorBoundary(userExists),
        readUser
    ]
};