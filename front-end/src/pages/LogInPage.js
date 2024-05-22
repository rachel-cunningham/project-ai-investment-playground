import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { userLogin } from "../utils/api";
import { Box, Button, CardMedia, Container, TextField, Typography } from "@mui/material";
import welcomeBack from "../assets/images/icons/WelcomeBack_icon.png";
import Header from "../components/Header";

export default function LogInPage() {
    const [credentials, setCredentials] = useState({
        username: "",
        password: "",
    });
    const navigate = useNavigate();

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
            console.log(`${response.username} logged in successfully`)
            navigate(`/dashboard/${response.user_id}`);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <Container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Header />
            <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 10 }}>
                <CardMedia
                    component="img"
                    alt="welcomeBack"
                    image={welcomeBack}
                    sx={{ width: '344px', height: '227px' }}
                />
            </Box>
            <Typography
                variant="h2"
                color="white"
                sx={{ fontSize: '48px', textAlign: 'center', my: 4 }}
            >
                Welcome Back
            </Typography>
            <form onSubmit={handleSubmit} style={{ width: '100%', maxWidth: '400px' }}>
                <Box sx={{ mb: 2 }}>
                    <h2 style={{ color: "white", mb: 0 }}>Username</h2>
                    <TextField
                        type="text"
                        id="username"
                        name="username"
                        value={credentials.username}
                        onChange={handleChange}
                        fullWidth
                        required
                        sx={{
                            backgroundColor: 'white',
                            input: { color: 'black' },
                            borderRadius: '5px',
                            marginBottom: '16px', // Adjusts space between the TextField and next h2
                        }}
                    />
                </Box>
                <Box>
                    <h2 style={{ color: "white", mb: 0 }}>Password</h2>
                    <TextField
                        type="password"
                        id="password"
                        name="password"
                        value={credentials.password}
                        onChange={handleChange}
                        fullWidth
                        required
                        sx={{
                            backgroundColor: 'white',
                            input: { color: 'black' },
                            borderRadius: '5px',
                            mb: 8, 
                        }}
                    />
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Button
                        variant="contained"
                        type="submit"
                        onClick={handleSubmit}
                        sx={{
                            fontFamily: "MavenPro",
                            textTransform: 'none',
                            mb: 6,
                            borderRadius: '15px',
                            boxShadow: '0 10px 0 #639577',
                            width: 'auto',
                            paddingX: 6,
                            color: "#3B0347",
                            bgcolor: "#87DBA8",
                            '&:hover': {
                                bgcolor: "#639577"
                            }
                        }}
                    >
                        Log In
                    </Button>
                </Box>
            </form>
        </Container>
    );
}
