const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "..", ".env") });
const bodyParser = require('body-parser');

const cookieParser = require("cookie-parser");
const express = require("express");
const cors = require("cors");
const errorHandler = require("./errors/errorHandler");
const notFound = require("./errors/notFound");
const usersRouter = require("./users/users.router");
const loginRouter = require("./authentication/login.router");

const app = express();

app.use(
    cors({
        origin: "http://localhost:3000",
        credentials: true,
    })
);
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});
app.use("/users", usersRouter);
app.use("/login", loginRouter);

// Error handling
app.use(notFound);
app.use(errorHandler);

module.exports = app;
