import React from "react";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import "../App.css";

function HomePage() {
  return (
    <div className="App">
      <header className="App-header">
        <Typography variant="h1">Hello World</Typography>
        <Button variant="contained" color="primary">
          This is a button
        </Button>
        <p>"/dashboard" </p>
        <p>"/log-in"</p>
        <p>"/sign-up</p>
      </header>
     
    </div>
  );
}

export default HomePage;
