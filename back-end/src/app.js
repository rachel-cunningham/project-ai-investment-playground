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

const app = express();

app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}));
app.use(express.json());
app.use(cookieParser());

app.use("/users", usersRouter);
app.use("/login", loginRouter);
app.use("/users/:userId/goals", goalsRouter);

// Error handling
app.use(notFound);
app.use(errorHandler);

module.exports = app;
