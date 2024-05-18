import React, { useState } from "react";
import { Link } from "react-router-dom";
import { readUserByUsername, userLogin, deleteUser, updateUser, createUser } from "../utils/api";

export default function ExampleLoginPage() {
    const [credentials, setCredentials] = useState({
        username: "",
        password: ""
    })
    const [user, setUser] = useState(null)

    const handleCreateUserClick = async () => {
        const placeholderUser = {
            first_name: "Guy",
            last_name: "McGuysson",
            username: "mrguy",
            email: "guy@guy.guy",
            password: "guy",
            age: "50",
            occupation: "five guys"
        }

        try {
            const response = await createUser(placeholderUser)
            console.log(response)
        } catch (err) {
            console.error(err)
        }
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setCredentials((prevCredentials) => ({
            ...prevCredentials,
            [name]: value,
        }));
    };

    const handleUpdateFormChange = (event) => {
        const { name, value } = event.target
        setUser(prevUser => ({
          ...prevUser,
          [name]: value
        }))
    }

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

    const handleUpdateFormSubmit = async (event) => {
        event.preventDefault()
        const abortController = new AbortController()
        try {
            const response = await updateUser(user, abortController.signal)
            setUser(response.data)
        } catch (err) {
            console.error(err)
        } finally {
            console.log("Navigate to dashboard for user with user.username")
        }
    }

    const handleClickLoadUser = async () => {
        try {
            const response = await readUserByUsername(user.username);
            console.log(response);
        } catch (err) {
            console.error(err);
        }
    };

    const handleClickDeleteUser = async () => {

        try {
            const response = await deleteUser(user.username)
            console.log("DELETED")
        } catch (err) {
            console.error(err)
        }
    }

    const updateUserForm = user ? (
        <>
        <form onSubmit={handleUpdateFormSubmit}>
          <div>
            <label htmlFor="age">Age:</label>
            <input
              type="number"
              id="age"
              name="age"
              value={user.age}
              onChange={handleUpdateFormChange}
            />
          </div>
          <div>
            <label htmlFor="occupation">Occupation:</label>
            <input
              type="text"
              id="occupation"
              name="occupation"
              value={user.occupation}
              onChange={handleUpdateFormChange}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
        </>
    ) : null

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

        // Button to test readUser function
        output.push(<button onClick={handleClickLoadUser}>Load User</button>);
        output.push(updateUserForm)
        output.push(<button onClick={handleClickDeleteUser}>Delete User</button>)

        return output;
    }

    return (
        <>
            <button onClick={handleCreateUserClick}>Create User</button>
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
