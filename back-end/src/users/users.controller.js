const asyncErrorBoundary = require("../errors/asyncErrorBoundary");
const hasProperties = require("../utils/hasProperties");
const service = require("./users.service");

async function create(req, res, next) {
  const {
    data: {
      first_name,
      last_name,
      email,
      password,
      username,
      age,
      occupation,
    } = {},
  } = req.body;

  const newUser = {
    first_name,
    last_name,
    email,
    password,
    username,
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
  const data = await service.readUser(username);

  if (!data) {
    next({
      status: 404,
      message: `Username '${username}' does not exist`,
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
    asyncErrorBoundary(hasProperties("first_name")),
    asyncErrorBoundary(hasProperties("last_name")),
    asyncErrorBoundary(hasProperties("email")),
    asyncErrorBoundary(hasProperties("password")),
    asyncErrorBoundary(hasProperties("username")),
    asyncErrorBoundary(create),
  ],
  list: asyncErrorBoundary(list),
  read: [asyncErrorBoundary(userExists), readUser],
};
