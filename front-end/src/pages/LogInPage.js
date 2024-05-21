import { Typography } from "@mui/material";
import { Box, CardMedia, Container } from "@mui/material";
import React, { useState } from "react";
import AuthForm from "../components/AuthForm";
import welcomeBack from "../assets/images/icons/WelcomeBack_icon.png"
import Header from "../components/Header";

function LogInPage() {
  const [loginError, setLoginError] = useState("");

  const handleLoginSubmit = (formData) => {
    const { username, password } = formData;
    if (username === "exampleuser" && password === "password") {
      console.log("Login successful:", formData);
      setLoginError("");
    } else {
      setLoginError("Invalid username or password. Please try again.");
    }
  };

  return (
    <Container sx={{ display:'flex', flexDirection: 'column'}}>
      <Header />
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <CardMedia
          component="img"
          alt="welcomeBack"
          image={welcomeBack}
          sx={{ width: '344px', height: '227px', display: 'flex' }}
        >
        </CardMedia>
        <Typography
          color="white"
          sx={{ fontSize: '48px', fontFamily: 'MontBlancBold', textAlign: 'center' }}
        >
          Welcome Back
        </Typography>
      </Box>
      <Box>
        <AuthForm isSignup={false} onSubmit={handleLoginSubmit} />
        {loginError && <p>{loginError}</p>}
      </Box>
    </Container>

  );
}

export default LogInPage;
