const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "..", ".env") });

const cookieParser = require("cookie-parser");
const express = require("express");
const cors = require("cors");
const errorHandler = require("./errors/errorHandler");
const notFound = require("./errors/notFound");
const usersRouter = require("./users/users.router");
const loginRouter = require("./authentication/login.router");
const goalsRouter = require("./goals/goals.router");
const authenticateToken = require("./authentication/authenticateToken");

const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use("/users", usersRouter);
app.use("/login", loginRouter);
app.use("/users/:userId/goals", authenticateToken, goalsRouter);

// Error handling
app.use(notFound);
app.use(errorHandler);

module.exports = app;
