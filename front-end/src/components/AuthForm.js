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
        met: false,
      },
    ];
    return requirements.map((requirement) => ({
      dot: "\u2022",
      label: requirement.label,
    }));
  };

  return (
    <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <Box component="form" onSubmit={handleSubmit} sx={{ width:'360px', height:'206px', mb: 2 }}>
        <h2 style={{ color: "white" }}> Username</h2>
        <TextField
          name="username"
          value={formData.username}
          onChange={handleChange}
          fullWidth
          margin="normal"
          sx={{
            width: "348px",
            height: "61px",
            backgroundColor: "white",
            fontFamily: "Afacad",
            borderRadius: "5px",
          }}
          required
        />
        <h2 style={{ color: "white" }}>Password</h2>
        <TextField
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          fullWidth
          margin="normal"
          sx={{
            width: "348px",
            height: "61px",
            backgroundColor: "white",
            fontFamily: "Afacad",
            borderRadius: "5px",
          }}
          required
          error={!!passwordError}
          helperText={passwordError}
        />
      </Box>

      <Box sx={{ width:'396', height:'272.43', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <List sx={{ fontFamily: 'Afacad', fontSize:'24px'}}>
          {checkPasswordRequirements().map((requirement, index) => (
            <ListItem key={index}>
              <ListItemIcon>
                {requirement.met ? <CheckIcon color="primary" /> : null}
              </ListItemIcon>
              <ListItemText primary={`${requirement.dot} ${requirement.label}`} />
            </ListItem>
          ))}
        </List>
        <Button
          variant="contained"
          color="primary"
          size="large"
          sx={{
            fontFamily: "MavenPro",
            textTransform: 'none',
            marginX: 1,
            borderRadius: '15px',
            boxShadow: '0 10px 0 #639577',
            width: 'auto',
            paddingX: 3,
            color: "#3B0347",
            bgcolor: "#87DBA8",
            '&:hover': {
              bgcolor: "#639577"
            }
          }}
          type="submit"
          fullWidth
        >
          {isSignup ? "Create" : "Log In"}
        </Button>
      </Box>
    </Box>
  );
};

export default AuthForm;
