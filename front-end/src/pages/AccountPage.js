import React from "react";
import { Box, Typography, Button } from "@mui/material";
import AuthHeader from "../components/AuthHeader";
import { Link, useParams } from "react-router-dom";

function AccountPage() {
  const { userId } = useParams();

  return (
    <>
      <AuthHeader userId={userId} />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "20px",
        }}
      >
        <Typography variant="h1" align="center" gutterBottom>
          Your Account
        </Typography>
        <Typography variant="h4" sx={{ color: "white", mb: 5 }}>
          Coming Soon!
        </Typography>
        <Typography variant="h5" align="center">
          We're working hard to bring you an amazing account experience.
          <br /> Stay tuned for updates!
        </Typography>
        <Button
          component={Link}
          to={`/dashboard/${userId}`}
          color="primary"
          size="small"
          sx={{
            fontFamily: "MavenPro",
            fontSize: {
              xs: "0.8rem",
              sm: "0.8rem",
              md: "0.8rem",
              lg: "1rem",
            },
            textTransform: "none",
            borderRadius: "15px",
            boxShadow: "0 9px 0 #639577",
            padding: "10px 20px",
            color: "#3B0347",
            bgcolor: "#87DBA8",
            "&:hover": {
              bgcolor: "#639577",
            },
            m: 5,
          }}
        >
          Back to Dashboard
        </Button>
      </Box>
    </>
  );
}

export default AccountPage;
