import React from "react";
import { Alert } from "@mui/material";

/**
 * Defines the alert message to render if the specified error is truthy.
 * @param error
 *  an instance of an object with `.message` property as a string, typically an Error instance.
 * @returns {JSX.Element}
 *  a MaterialUI error alert that contains the message string.
 */


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
