import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  TextField, Button, Container, Typography, CardMedia, Grid, Box, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle
} from "@mui/material";
import Header from "../components/Header";
import createIcon from "../assets/images/icons/CreateAccount_Icon.png";
import { createUser } from "../utils/api";

function SignUpPage() {
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        username: '',
        email: '',
        password: '',
        confirm: '',
        age: '',
        occupation: '',
        img_src: 'null'
    });
    const [open, setOpen] = useState(false); // State to control the dialog
    const { confirm, ...userData } = formData;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }

    async function handleSubmit(event) {
        event.preventDefault();
        const validationErrors = {};
        if (!formData.first_name.trim()) {
            validationErrors.first_name = "First name required";
        }
        if (!formData.last_name.trim()) {
            validationErrors.last_name = "Last name required";
        }
        if (!formData.username.trim()) {
            validationErrors.username = "Username required";
        }
        if (!formData.email.trim()) {
            validationErrors.email = "Email required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            validationErrors.email = "Email address is invalid";
        }
        if (!formData.password.trim()) {
            validationErrors.password = "Password required";
        } else if (formData.password.length < 12) {
            validationErrors.password = "Password should be at least 12 characters";
        }
        if (formData.confirm !== formData.password) {
            validationErrors.confirm = "Passwords do not match";
        }
        if (!formData.age.trim()) {
            validationErrors.age = "Age required";
        } 
        if (!Number.isInteger(Number(formData.age)) || Number(formData.age) <= 0) {
            validationErrors.age = "Age must be a positive number";
        }
        if (!formData.occupation.trim()) {
            validationErrors.occupation = "Occupation required";
        }
        setErrors(validationErrors);
        if (Object.keys(validationErrors).length === 0) {
            const abortController = new AbortController();
            try {
                
                await createUser(userData, abortController.signal);
                console.log("User created!");
                setOpen(true);
            } catch (error) {
                console.log(error);
            }
            return () => abortController.abort();
        }
    }

    const handleClose = () => {
        setOpen(false);
        navigate("/log-in");
    };

    return (
        <Container sx={{ mt: 8 }}>
            <Header />
            <CardMedia
              component="img"
              alt="createIcon"
              image={createIcon}
              sx={{ width: '24%', height: 'auto', margin: '0 auto', mb: 1 }}
            />
            <Typography variant="h4" component="h1" gutterBottom sx={{ textAlign: 'center', mb: 4 }}>
                Create an Account
            </Typography>
            <form onSubmit={handleSubmit} noValidate>
                <Grid container spacing={8}>
                    <Grid item xs={12} sm={6}>
                        <h2 style={{ color: "white" }}>First Name</h2>
                        <TextField
                            fullWidth
                            margin="normal"
                            id="first_name"
                            name="first_name"
                            variant="outlined"
                            placeholder="Enter first name"
                            onChange={handleChange}
                            error={!!errors.first_name}
                            helperText={errors.first_name}
                            sx={{
                                backgroundColor: "white",
                                fontFamily: "Afacad",
                                borderRadius: "5px",
                            }}
                            inputProps={{ style: { color: "black" } }}
                        />           
                        <h2 style={{ color: "white" }}>Last Name</h2>
                        <TextField
                            fullWidth
                            margin="normal"
                            id="last_name"
                            name="last_name"
                            variant="outlined"
                            placeholder="Enter last name"
                            onChange={handleChange}
                            error={!!errors.last_name}
                            helperText={errors.last_name}
                            sx={{
                                backgroundColor: "white",
                                fontFamily: "Afacad",
                                borderRadius: "5px",
                            }}
                            inputProps={{ style: { color: "black" } }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <h2 style={{ color: "white" }}>Email</h2>
                        <TextField
                            fullWidth
                            margin="normal"
                            id="email"
                            name="email"
                            variant="outlined"
                            placeholder="Enter email"
                            onChange={handleChange}
                            error={!!errors.email}
                            helperText={errors.email}
                            sx={{
                                backgroundColor: "white",
                                fontFamily: "Afacad",
                                borderRadius: "5px",
                            }}
                            inputProps={{ style: { color: "black" } }}
                        />
                        <h2 style={{ color: "white" }}>Username</h2>
                        <TextField
                            fullWidth
                            margin="normal"
                            id="username"
                            name="username"
                            variant="outlined"
                            placeholder="Enter username"
                            onChange={handleChange}
                            error={!!errors.username}
                            helperText={errors.username}
                            sx={{
                                backgroundColor: "white",
                                fontFamily: "Afacad",
                                borderRadius: "5px",
                            }}
                            inputProps={{ style: { color: "black" } }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <h2 style={{ color: "white" }}>Age</h2>
                        <TextField
                            fullWidth
                            margin="normal"
                            id="age"
                            name="age"
                            variant="outlined"
                            placeholder="Enter age"
                            onChange={handleChange}
                            error={!!errors.age}
                            helperText={errors.age}
                            sx={{
                                backgroundColor: "white",
                                fontFamily: "Afacad",
                                borderRadius: "5px",
                            }}
                            inputProps={{ style: { color: "black" } }}
                        />
                        <h2 style={{ color: "white" }}>Occupation</h2>
                        <TextField
                            fullWidth
                            margin="normal"
                            id="occupation"
                            name="occupation"
                            variant="outlined"
                            placeholder="Enter occupation"
                            onChange={handleChange}
                            error={!!errors.occupation}
                            helperText={errors.occupation}
                            sx={{
                                backgroundColor: "white",
                                fontFamily: "Afacad",
                                borderRadius: "5px",
                            }}
                            inputProps={{ style: { color: "black" } }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <h2 style={{ color: "white" }}>Password</h2>
                        <TextField
                            fullWidth
                            margin="normal"
                            id="password"
                            name="password"
                            type="password"
                            variant="outlined"
                            placeholder="Enter password"
                            onChange={handleChange}
                            error={!!errors.password}
                            helperText={errors.password}
                            sx={{
                                backgroundColor: "white",
                                fontFamily: "Afacad",
                                borderRadius: "5px",
                            }}
                            inputProps={{ style: { color: "black" } }}
                        />
                        <h2 style={{ color: "white" }}>Confirm Password</h2>
                        <TextField
                            fullWidth
                            margin="normal"
                            id="confirm"
                            name="confirm"
                            type="password"
                            variant="outlined"
                            placeholder="Enter password again"
                            onChange={handleChange}
                            error={!!errors.confirm}
                            helperText={errors.confirm}
                            sx={{
                                backgroundColor: "white",
                                fontFamily: "Afacad",
                                borderRadius: "5px",
                            }}
                            inputProps={{ style: { color: "black" } }}
                        />
                    </Grid>
                </Grid>
                <Box sx={{textAlign: 'center', color: 'white', mt: 2}}>
                  <Typography variant="h6">
                    Password Requirments:
                  </Typography>
                  <Typography variant="body1">
                   - At least 12 characters long.
                  </Typography>
                  <Typography variant="body1">
                   - A combination of uppercase letters, lowercase letters, numbers, and symbols.
                  </Typography>
                </Box>
                <Box sx={{display: 'flex', justifyContent: 'center', mt: 2}}>
                  <Button
                      fullWidth
                      variant="contained"
                      type="submit"
                      onClick={handleSubmit}
                      sx={{
                          fontFamily: "MontBlancBold",
                          textTransform: 'none',
                          marginTop: 3,
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
                      Create
                  </Button>
                </Box>
            </form>
            <Dialog open={open} onClose={handleClose}>
              <Box sx={{mx: 0}}>
                <DialogTitle>Account Created Successfully!</DialogTitle>
                <DialogContent>
                    <DialogContentText variant="h5" textAlign='center'>
                        Your account has been created successfully!
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                <Button
                      fullWidth
                      variant="contained"
                      type="submit"
                      onClick={handleClose}
                      sx={{
                          fontFamily: "MontBlancBold",
                          textTransform: 'none',
                          marginTop: 3,
                          margin: '0 auto',
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
                        Okay
                    </Button>
                </DialogActions>
              </Box>
            </Dialog>
        </Container>
    );
}

export default SignUpPage;
