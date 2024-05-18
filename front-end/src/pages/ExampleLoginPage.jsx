import React, { useState } from "react";
import { Link } from "react-router-dom";
import { readUserByUsername, userLogin } from "../utils/api";

export default function ExampleLoginPage() {
    const [credentials, setCredentials] = useState({
        username: "",
        password: "",
    });
    const [user, setUser] = useState(null);
    console.log("user", user);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setCredentials((prevCredentials) => ({
            ...prevCredentials,
            [name]: value,
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const abortController = new AbortController();
        try {
            const response = await userLogin(
                credentials.username,
                credentials.password,
                abortController.signal
            );
            setUser(response);
        } catch (err) {
            console.error(err);
        } finally {
            console.log("Navigate to dashboard for user with user.username");
        }
    };

    const handleClick = async () => {
        console.log(user.username);
        console.log(user);
        try {
            const response = await readUserByUsername(user.username);
            console.log(response);
        } catch (err) {
            console.error(err);
        }
    };

    function generateElements(user) {
        let output = [];
        for (const [key, value] of Object.entries(user)) {
            output.push(
                <>
                    <h3>{key}</h3>
                    <p>{value}</p>
                </>
            );
        }

        output.push(<button onClick={handleClick}>Load User</button>);

        return output;
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={credentials.username}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={credentials.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
            <div>
                {user ? (
                    <>
                        {generateElements(user)} {console.log("USER", user)}
                        <Link to={`/dashboard/${user.user_id}/create`}>
                            <button type="submit">Create Goal</button>
                        </Link>
                    </>
                ) : null}
            </div>
        </>
    );
}
