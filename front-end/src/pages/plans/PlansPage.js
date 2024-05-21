import React from "react";
import { Link } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";
import AuthHeader from "../../components/AuthHeader";
import CustomDivider from "../../components/CustomDivider";

// LOGIC NEEDED TO BE IMPLEMENTED TO DO GET REQUEST IN PLANS AND HAVE THEM SHOW UP ON THIS PAGE
// PLACEHOLDER DONE
// IF NO PLAN, SHOW THE NO PLAN CARD, OTHERWISE, SHOW THE PLANS 

function PlansPage({ userId }) {
  return (
    <Box sx={{ mt: { xs: 5, md: 0 } }}>
      <AuthHeader />
      <Box
        id="plans"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontFamily: "MontBlancBold",
            textAlign: "center",
            color: "#87DBA8",
            fontSize: { xs: "3rem", sm: "4rem", md: "5rem", lg: "4.8rem" },
            mb: 2,
          }}
        >
          Your Plans
        </Typography>
        <CustomDivider />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "80%",
            mt: 4,
          }}
        >
          <Box
            sx={{
              display: "flex",
              gridTemplateColumns: { xs: "1fr", md: "0.7fr 1fr" },
              gridGap: { xs: 2, md: 4 },
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <Box
              sx={{
                bgcolor: "white",
                border: "8px solid #87DBA8",
                borderRadius: "25px",
                width: "100%",
                textAlign: "center",
                p: 2,
                mb: { xs: 5, lg: 1 },
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  color: "#3B0347",
                  mb: 5,
                }}
              >
                You haven't started any plans.
                <br />
                <br />
                When you do, they'll be located here.
              </Typography>
              <Button
                component={Link}
                to={`/dashboard/${userId}/plans/new`}
                color="primary"
                size="small"
                sx={{
                  fontFamily: "MontBlancBold",
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
                  mb: 1,
                }}
              >
                Create a Plan
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default PlansPage;
