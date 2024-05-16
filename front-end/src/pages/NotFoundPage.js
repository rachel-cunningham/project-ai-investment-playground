import React from "react";
import { Link } from "react-router-dom";
import { Button, Typography, Container, Box } from "@mui/material";
import ErrorAlert from "../layouts/ErrorAlert";

function NotFoundPage() {
  return (
    <Container maxWidth="sm">
      <Box textAlign="center">
        <Typography variant="h2" gutterBottom>
          404 Not Found
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Oh no! The page you are looking for does not exist.
        </Typography>
        <Box mt={4}>
          <Button variant="contained" color="primary" component={Link} to="/">
            Go Back Home
          </Button>
          <ErrorAlert error="test" />
        </Box>
      </Box>
    </Container>
  );
}

export default NotFoundPage;
