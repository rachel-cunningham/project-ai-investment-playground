const asyncErrorBoundary = require("../errors/asyncErrorBoundary");
const hasProperties = require("../utils/hasProperties");
const service = require("./users.service");
const bcrypt = require("bcryptjs");
const authenticateToken = require("../authentication/authenticateToken");
const validateInput = require("../utils/validateInput");

// POST requests to /users will create a new user and respond with that new user data
async function create(req, res, next) {
    try {
        const {
            data: {
                first_name,
                last_name,
                username,
                email,
                password,
                age,
                occupation,
                img_src,
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
            password_hash,
            age,
            occupation,
            img_src,
        };

        const response = await service.create(newUser);
        res.status(201).json({ data: response });
    } catch (error) {
        next({
            status: 500,
            message: `Error creating user data: ${error}`,
        });
    }
}

async function list(req, res) {
    res.json({ data: await service.list() });
}

// Validates that a user with the given username exists.
// req.user should have previously been assigned by authenticateToken
async function userExists(req, res, next) {
    const { username } = req.params;
    const { userId } = req.user;

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

// GET requests to /users/:username will return a single user - the whole row
function readUser(req, res, next) {
    const data = res.locals.user;

    res.json({ data });
}

async function update(req, res) {
    try {
        const { user_id } = res.locals.user;
        const updatedUser = { ...req.body.data, user_id };

        const result = await service.update(updatedUser);
        res.json({ data: result[0] });
    } catch (error) {
        next({
            status: 500,
            message: `Error updating user data: ${error}`,
        });
    }
}

function validPatchProperty(req, res, next) {
    const propertiesToPatch = req.body.data;
    const validProperties = [
        "first_name",
        "last_name",
        "username",
        "email",
        "age",
        "occupation",
        "img_src",
    ];

    for (let property in propertiesToPatch) {
        if (!validProperties.includes(property)) {
            next({
                status: 400,
                message: `"${property}" is not a valid property. Valid properties: ${validProperties}`,
            });
        } else {
            next();
        }
    }
}

// Patches a single user property
async function patch(req, res, next) {
    try {
        const { user_id } = res.locals.user;
        const patchedUser = { ...req.body.data, user_id };

        const result = await service.patch(patchedUser);
        res.json({ data: result[0] });
    } catch (error) {
        next({
            status: 500,
            message: `Error patching user data: ${error}`,
        });
    }
}

async function deleteUser(req, res, next) {
    try {
        const { user_id } = res.locals.user;
        await service.deleteUser(user_id);
        res.sendStatus(204);
    } catch (error) {
        next({
            status: 500,
            message: `Error deleting user data: ${error}`,
        });
    }
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
                "occupation",
                "img_src"
            )
        ),
        asyncErrorBoundary(validateInput),
        asyncErrorBoundary(create),
    ],
    list: [asyncErrorBoundary(list)],
    read: [authenticateToken, asyncErrorBoundary(userExists), readUser],
    update: [
        authenticateToken,
        asyncErrorBoundary(userExists),
        asyncErrorBoundary(
            hasProperties(
                "first_name",
                "last_name",
                "username",
                "email",
                "age",
                "occupation"
            )
        ),
        validateInput,
        update,
    ],
    patch: [
        authenticateToken,
        asyncErrorBoundary(userExists),
        validPatchProperty,
        validateInput,
        patch,
    ],
    deleteUser: [
        authenticateToken,
        asyncErrorBoundary(userExists),
        asyncErrorBoundary(deleteUser),
    ],
};
