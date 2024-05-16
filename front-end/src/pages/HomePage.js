import React from "react";
import { Link } from "react-router-dom";
import { Typography, Button, Container, Box, Grid } from "@mui/material";

function HomePage() {
  return (
    <Container maxWidth="lg" sx={{ textAlign: "center", marginTop: 8 }}>
      <Typography variant="h2" gutterBottom>
        Welcome to WealthifyAI
      </Typography>
      <Typography variant="h5" paragraph>
        Your AI-powered investment advisor for new and experienced investors.
      </Typography>
      <Box sx={{ marginY: 4 }}>
        <Button component={Link} to="/log-in" variant="contained" color="primary" size="large" sx={{ marginX: 1 }}>
          Get Started
        </Button>
        <Button component={Link} to="/about" variant="outlined" color="secondary" size="large" sx={{ marginX: 1 }}>
          Learn More
        </Button>
      </Box>
      <Grid container spacing={4} justifyContent="center" sx={{ marginTop: 4 }}>
        <Grid item xs={12} sm={6} md={4}>
          <Box sx={{ padding: 2, border: "1px solid #ccc", borderRadius: 2 }}>
            <Typography variant="h6" gutterBottom>
              Personalized Advice
            </Typography>
            <Typography>
              Receive tailored investment advice that fits your unique financial goals and risk tolerance.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Box sx={{ padding: 2, border: "1px solid #ccc", borderRadius: 2 }}>
            <Typography variant="h6" gutterBottom>
              Expert Insights
            </Typography>
            <Typography>
              Leverage the expertise of our AI to make informed investment decisions with confidence.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Box sx={{ padding: 2, border: "1px solid #ccc", borderRadius: 2 }}>
            <Typography variant="h6" gutterBottom>
              Easy to Use
            </Typography>
            <Typography>
              Our user-friendly platform makes it simple to get started and stay on top of your investments.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default HomePage;
