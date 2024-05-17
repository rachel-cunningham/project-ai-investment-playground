import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

const AuthForm = ({ isSignup, onSubmit }) => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    ...(isSignup && { email: '', confirmPassword: '' })
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
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
      {isSignup && (
        <TextField
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />
      )}
      <TextField
        label="Password"
        name="password"
        type="password"
        value={formData.password}
        onChange={handleChange}
        fullWidth
        margin="normal"
        required
      />
      {isSignup && (
        <TextField
          label="Confirm Password"
          name="confirmPassword"
          type="password"
          value={formData.confirmPassword}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />
      )}
      <Button type="submit" variant="contained" color="primary" fullWidth>
        {isSignup ? 'Sign Up' : 'Log In'}
      </Button>
    </Box>
  );
};

export default AuthForm;
