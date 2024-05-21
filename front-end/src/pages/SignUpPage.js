import React, { useState } from "react";
import AuthForm from "../components/AuthForm";
import { Box, CardMedia ,Container, Typography } from "@mui/material";
import create from "../assets/images/signup/Icon.png";
import Header from "../components/Header";


function SignUpPage() {
  const [passwordError, setPasswordError] = useState("");

  const handleSignupSubmit = (formData) => {
    const { password } = formData;
    // Validate password length
    if (password.length < 12) {
      setPasswordError("Password must be at least 12 characters long.");
      return;
    }

    // Password must be a combination of uppercase letters, lowercase letters, numbers, and symbols.
    const passwordRegex =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{12,}$/;
    if (!passwordRegex.test(password)) {
      setPasswordError(
        "Password must contain at least one uppercase letter, one lowercase letter, one number, and one symbol."
      );
      return;
    }

    //validation logic for password similarity with previous password.

    console.log("Signup data:", formData);
  };
  return (
    <Container >
      <Header />
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <CardMedia
          component="img"
          alt="create"
          image={create}
          sx={{ width: '175px', height: '135px', display: 'flex' }}
        />
      </Box>
      <Typography
        color="white"
        sx={{ fontSize: '48px', fontFamily: 'MontBlancBold', textAlign: 'center' }}
      >
        Let's create an account
      </Typography>
      <div>
      <header>
        <AuthForm
          isSignup={true}
          onSubmit={handleSignupSubmit}
          passwordError={passwordError}
        />
      </header>
    </div>
    </Container>

  );
}

export default SignUpPage;
