import React from "react";
import { Typography, Box, Divider, Button } from "@mui/material";
import { Link } from "react-router-dom";
import theme from "../styles/theme";
import Footer from "../components/Footer";

function AboutUs() {
  return (
    <>
      <Box
        id="about-us"
        sx={{
          background: `linear-gradient(to top, ${theme.palette.custom.LightPurple}, ${theme.palette.custom.DarkPurple})`,
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
          About Us
        </Typography>
        <Divider
          sx={{
            display: "flex",
            backgroundColor: "#87DBA8",
            height: "2px",
            width: "80%",
            marginY: 1,
          }}
        />
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
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "0.7fr 1fr" },
              gridGap: { xs: 2, md: 4 },
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              mb: 4,
            }}
          >
            <Typography
              sx={{
                fontFamily: "MontBlancBold",
                textAlign: { xs: "center", md: "left" },
                color: "#87DBA8",
                fontSize: { xs: "2.5rem", md: "3rem", lg: "3.8rem" },
                mb: { xs: 2, md: 0 },
              }}
            >
              Our Team
            </Typography>
            <Box
              sx={{
                bgcolor: "white",
                border: "8px solid #87DBA8",
                borderRadius: "25px",
                width: "100%",
                p: 2,
                display: "flex",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  color: "#3B0347",
                  fontSize: "20px",
                  fontWeight: 700,
                  px: 2,
                }}
              >
                Our team consists of financial experts, data scientists, and
                software engineers who are passionate about making investing
                accessible to everyone. We are dedicated to continuously
                improving our platform and providing you with the best possible
                experience.
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "0.7fr 1fr" },
              gridGap: { xs: 2, md: 4 },
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <Typography
              sx={{
                fontFamily: "MontBlancBold",
                textAlign: { xs: "center", md: "left" },
                color: "#87DBA8",
                fontSize: { xs: "2.5rem", md: "3rem", lg: "3.8rem" },
                mb: { xs: 2 },
              }}
            >
              Our Mission
            </Typography>
            <Box
              sx={{
                bgcolor: "white",
                border: "8px solid #87DBA8",
                borderRadius: "25px",
                width: "100%",
                p: 2,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                mb: { xs: 5, lg: 1 },
              }}
            >
              <Typography
                sx={{
                  color: "#3B0347",
                  fontSize: "20px",
                  fontWeight: 700,
                  px: 2,
                  mb: 1,
                }}
              >
                At Wealthify AI, we want to empower you with the tools and
                insights you need to make informed investment decisions with
                confidence. Whether you're just starting your investment journey
                or looking to optimize your portfolio, Wealthify AI offers
                personalized advice, expert insights, and a user-friendly
                platform to help you achieve your financial goals. Create an
                account to get your personalized advice!
              </Typography>
              <Button
                component={Link}
                to="/sign-up"
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
                Get Personalized Advice
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
      <Footer />
    </>
  );
}

export default AboutUs;
