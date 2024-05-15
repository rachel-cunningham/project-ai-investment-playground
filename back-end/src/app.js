const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "..", ".env") });


const express = require("express");
const cors = require("cors");
const errorHandler = require("./errors/errorHandler");
const notFound = require("./errors/notFound");
const usersRouter = require("./users/users.router");
const authenticationRouter = require("./authentication/auth.router")

const app = express();

app.use(cors());
app.use(express.json());


app.use("/users", usersRouter);
app.use("/login", authenticationRouter)

// Error handling
app.use(notFound);
app.use(errorHandler);

module.exports = app;
