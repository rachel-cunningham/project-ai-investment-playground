import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
    createUser,
    deleteUser,
    readUserByUsername,
    updateUser,
    userLogin,
} from "../utils/api";
import { Box, Button, CardMedia, Container, TextField, Typography } from "@mui/material";
import welcomeBack from "../assets/images/icons/WelcomeBack_icon.png";
import Header from "../components/Header";

export default function ExampleLoginPage() {
    const [credentials, setCredentials] = useState({
        username: "",
        password: "",
    });
    const [user, setUser] = useState(null);
    const navigate = useNavigate();  // Add this line

    const handleCreateUserClick = async () => {
        const placeholderUser = {
            first_name: "Guy",
            last_name: "McGuysson",
            username: "mrguy",
            email: "guy@guy.guy",
            password: "guy",
            age: "50",
            occupation: "five guys",
        };

        try {
            const response = await createUser(placeholderUser);
            console.log(response);
        } catch (err) {
            console.error(err);
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setCredentials((prevCredentials) => ({
            ...prevCredentials,
            [name]: value,
        }));
    };

    const handleUpdateFormChange = (event) => {
        const { name, value } = event.target;
        setUser((prevUser) => ({
            ...prevUser,
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
            navigate(`/dashboard/${response.user_id}`);  // Add this line
        } catch (err) {
            console.error(err);
        }
    };

    const handleUpdateFormSubmit = async (event) => {
        event.preventDefault();
        const abortController = new AbortController();
        try {
            const response = await updateUser(user, abortController.signal);
            setUser(response.data);
        } catch (err) {
            console.error(err);
        }
    };

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
            await deleteUser(user.username);
            console.log("User deleted!");
        } catch (err) {
            console.error(err);
        }
    };

    const updateUserForm = user ? (
        <>
            <form onSubmit={handleUpdateFormSubmit}>
                <Box>
                    <Typography variant="subtitle1">Age</Typography>
                    <TextField
                        type="number"
                        id="age"
                        name="age"
                        value={user.age}
                        onChange={handleUpdateFormChange}
                        fullWidth
                        margin="normal"
                        sx={{
                            backgroundColor: 'white',
                            input: { color: 'black' },
                        }}
                    />
                </Box>
                <Box>
                    <Typography variant="subtitle1">Occupation</Typography>
                    <TextField
                        type="text"
                        id="occupation"
                        name="occupation"
                        value={user.occupation}
                        onChange={handleUpdateFormChange}
                        fullWidth
                        margin="normal"
                        sx={{
                            backgroundColor: 'white',
                            input: { color: 'black' },
                        }}
                    />
                </Box>
                <Button type="submit" variant="contained" color="primary">
                    Submit
                </Button>
            </form>
        </>
    ) : null;

    function generateElements(user) {
        let output = [];
        for (const [key, value] of Object.entries(user)) {
            output.push(
                <Box key={key}>
                    <Typography variant="h6">{key}</Typography>
                    <Typography variant="body1">{value}</Typography>
                </Box>
            );
        }

        output.push(
            <Button onClick={handleClickLoadUser} variant="contained" color="primary">
                Load User
            </Button>
        );
        output.push(updateUserForm);
        output.push(
            <Button onClick={handleClickDeleteUser} variant="contained" color="secondary">
                Delete User
            </Button>
        );

        return output;
    }

    return (
        <Container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Header />
            <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}>
                <CardMedia
                    component="img"
                    alt="welcomeBack"
                    image={welcomeBack}
                    sx={{ width: '344px', height: '227px' }}
                />
            </Box>
            <Typography
                color="white"
                sx={{ fontSize: '48px', fontFamily: 'MontBlancBold', textAlign: 'center' }}
            >
                Welcome Back
            </Typography>
            <Button onClick={handleCreateUserClick} variant="contained" color="primary" sx={{ marginTop: 2 }}>
                Create User
            </Button>
            <form onSubmit={handleSubmit} style={{ width: '100%', maxWidth: '400px', marginTop: 2 }}>
                <Box>
                    <Typography variant="subtitle1" color='white' >Username</Typography>
                    <TextField
                        type="text"
                        id="username"
                        name="username"
                        value={credentials.username}
                        onChange={handleChange}
                        fullWidth
                        required
                        margin="normal"
                        sx={{
                            backgroundColor: 'white',
                            input: { color: 'black' },
                            borderRadius: '5px',
                        }}
                    />
                </Box>
                <Box>
                    <Typography variant="subtitle1" color='white' >Password</Typography>
                    <TextField
                        type="password"
                        id="password"
                        name="password"
                        value={credentials.password}
                        onChange={handleChange}
                        fullWidth
                        required
                        margin="normal"
                        sx={{
                            backgroundColor: 'white',
                            input: { color: 'black' },
                            borderRadius: '5px'
                        }}
                    />
                </Box>
                <Button type="submit" variant="contained" color="primary" fullWidth>
                    Log In
                </Button>
            </form>
            <Box sx={{ width: '100%', maxWidth: '400px', marginTop: 2 }}>
                {user && generateElements(user)}
                {user && (
                    <Link to={`/dashboard/${user.user_id}/create`}>
                        <Button variant="contained" color="primary" fullWidth sx={{ marginTop: 2 }}>
                            Create Goal
                        </Button>
                    </Link>
                )}
            </Box>
        </Container>
    );
}
