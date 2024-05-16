import React from "react";
import { Alert } from "@mui/material";

// error alerts for when we integrate backend with frontend

function ErrorAlert({ error }) {
  return (
    error && (
      <Alert severity="error">
        This is a test error message about {error.message}!
      </Alert>
    )
  );
}

export default ErrorAlert;
