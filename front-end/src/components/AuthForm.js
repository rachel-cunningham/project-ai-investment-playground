import React, { useState } from "react";
import {
  TextField,
  Button,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";

const AuthForm = ({ isSignup, onSubmit, passwordError }) => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  // Function to determine if password meets each requirement
  const checkPasswordRequirements = () => {
    const { password } = formData;
    const requirements = [
      {
        label: "At least 12 characters long but 14 or more is better.",
        met: password.length >= 12,
      },
      {
        label:
          "A combination of uppercase letters, lowercase letters, numbers, and symbols.",
        met: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{12,}$/.test(
          password
        ),
      },
      {
        label: "Significantly different from your previous passwords.",
        met: false, // Placeholder for the requirement
      },
    ];
    return requirements;
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <TextField
        label="Username"
        name="username"
        value={formData.username}
        onChange={handleChange}
        fullWidth
        margin="normal"
        required
      />
      <TextField
        label="Password"
        name="password"
        type="password"
        value={formData.password}
        onChange={handleChange}
        fullWidth
        margin="normal"
        required
        error={!!passwordError}
        helperText={passwordError}
      />
      <Button type="submit" variant="contained" color="primary" fullWidth>
        {isSignup ? "Create" : "Log In"}
      </Button>
      <Box mt={2}>
        <List>
          {checkPasswordRequirements().map((requirement, index) => (
            <ListItem key={index}>
              <ListItemIcon>
                {requirement.met ? <CheckIcon color="primary" /> : null}
              </ListItemIcon>
              <ListItemText primary={requirement.label} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default AuthForm;
