const bcrypt = require("bcryptjs");

// A little function to hash a password for ya if you wanna update the seeds
async function hashPassword(password) {
    try {
        const salt = await bcrypt.genSalt(10);
        const password_hash = await bcrypt.hash(password, salt);
        console.log(password_hash)
    } catch (error) {
        console.error(error)
    }
}

// Input the password as an arg here, as a string, and save the file
// run "node hashPassword.js" and copy the log from the console
hashPassword("SimplePass4$")