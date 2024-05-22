const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");
const service = require("../users/users.service");

/* This function 
1. receives the username and password sent from a form on the frontend
2. checks the db for a user with that username
3. checks the password from frontend form against password in db
4. generates an auth token
5. sends token back to the frontend, where it'll be stored in a cookie

*/
async function login(req, res) {
    try {
        const { username, password } = req.body.data;

        const user = await service.readUserByUsername(username);
        if (!user) {
            return res
                .status(401)
                .json({ message: "Invalid username or password" });
        }

        // Compares the encrypted password from the db with the password sent from the frontend form
        const isPasswordValid = await bcrypt.compare(
            password,
            user.password_hash
        );

        if (!isPasswordValid) {
            return res
                .status(401)
                .json({ message: "Invalid username or password" });
        }

        // Creates an auth token which includes (in encrypted form) the user's id and a key used to unencrypt the token
        const token = jwt.sign(
            { userId: user.user_id },
            process.env.API_SECRET_KEY,
            { expiresIn: "1h" }
        );

        /* Chrome is phasing out third-party cookies
        res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production", // set to process.env.NODE_ENV === 'production' if in production
            sameSite: "none",
            maxAge: 3600000, // 1 hour in milliseconds
            partitioned: true
        });
        */

        // Sends user info back to frontend
        res.status(200).json({ token, user });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
}

module.exports = {
    login: [asyncErrorBoundary(login)],
};
