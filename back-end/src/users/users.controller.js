const asyncErrorBoundary = require("../errors/asyncErrorBoundary");
const hasProperties = require("../utils/hasProperties");
const service = require("./users.service");
const bcrypt = require("bcryptjs");
const authenticateToken = require("../authentication/authenticateToken");

async function create(req, res, next) {
    const {
        data: {
            first_name,
            last_name,
            username,
            email,
            password,
            age,
            occupation,
        } = {},
    } = req.body;

    // Encrypts the user's password
    const salt = await bcrypt.genSalt(10);
    const password_hash = await bcrypt.hash(password, salt);

    const newUser = {
        first_name,
        last_name,
        username,
        email,
        password,
        password_hash,
        age,
        occupation,
    };

    const response = await service.create(newUser);
    res.status(201).json({ data: response });
}

async function list(req, res) {
    res.json({ data: await service.list() });
}

// Validates that a user with the given username exists
async function userExists(req, res, next) {
    const { username } = req.params;
    const { userId } = req.user;
    console.log(req.user);

    const data = await service.readUser(userId);

    if (!data) {
        next({
            status: 404,
            message: `User '${username}' does not exist`,
        });
    } else {
        res.locals.user = data;
        next();
    }
}

// Get requests to /users/:username will return a single user - the whole row
function readUser(req, res, next) {
    const data = res.locals.user;

    res.json({ data });
}

module.exports = {
    create: [
        asyncErrorBoundary(
            hasProperties(
                "first_name",
                "last_name",
                "username",
                "email",
                "password",
                "age",
                "occupation"
            )
        ),
        asyncErrorBoundary(create),
    ],
    list: [asyncErrorBoundary(list)],
    read: [authenticateToken, asyncErrorBoundary(userExists), readUser],
};
