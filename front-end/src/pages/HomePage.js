import React from "react";
import { Link } from "react-router-dom";
import { Typography, Button, Container, Box } from "@mui/material";
import Header from "../components/Header";
import AboutUs from "../components/AboutUs";
import HomeImage from "../assets/images/homepage/homepage.png";

function HomePage() {
  return (
    <Box
      sx={{
        backgroundImage: `url(${HomeImage})`,
        backgroundSize: "cover",
        backgroundPosition: {
          xs: "right 48% bottom 70%",
          sm: "right 45% bottom 80%",
        },
        backgroundAttachment: "fixed",
        height: "100vh",
        mt: 7,
        position: "relative",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "5%",
          left: "50%",
          transform: "translateX(-70%)",
          border: "2px solid #3B0347",
          borderRadius: "30px",
          width: { xs: "35%", sm: "25%", md: "20%", lg: "12%" },
          p: 1,
          display: "flex",
          alignItems: "center",
          backgroundImage: "linear-gradient(to top, white, transparent)",
        }}
      >
        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: "0.9rem", sm: "1.2rem" },
            fontWeight: 500,
            color: "#3B0347",
            textAlign: "center",
            px: 1,
          }}
        >
          Worried about tracking your overall financial health?
        </Typography>
      </Box>

      <Header />

      <Container
        sx={{
          textAlign: "left",
          paddingTop: "30vh",
          height: "100vh",
          paddingLeft: { lg: "0" },
        }}
      >
        <Box sx={{ ml: { lg: 0, xl: -20 } }}>
          <Typography
            variant="h1"
            color="#3B0B47"
            sx={{
              fontFamily: "MontBlancBold",
              fontSize: {
                xs: "3rem",
                sm: "4rem",
                md: "5rem",
                lg: "4.8rem",
                xl: "5.5rem",
              },
            }}
          >
            WEALTHIFY AI
          </Typography>
          <Typography
            variant="h4"
            color="black"
            paragraph
            sx={{
              fontFamily: "Afacad",
              fontSize: {
                xs: "1.3rem",
                sm: "2rem",
                md: "2.2rem",
                lg: "2rem",
              },
              ml: 1,
            }}
          >
            Investment advice that works, just for you.
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "start",
            }}
          >
            <Button
              component={Link}
              to="/sign-up"
              variant="contained"
              color="primary"
              size="large"
              sx={{
                fontFamily: "MontBlancBold",
                fontSize: {
                  xs: "1rem",
                  sm: "1.7rem",
                  md: "2rem",
                  lg: "1.4rem",
                },
                textTransform: "none",
                marginX: 1,
                borderRadius: "15px",
                boxShadow: "0 9px 0 #639577",
                width: "auto",
                paddingX: 3.2,
                color: "#3B0347",
                bgcolor: "#87DBA8",
                "&:hover": {
                  bgcolor: "#639577",
                },
              }}
            >
              Get Started
            </Button>
          </Box>
        </Box>
      </Container>
      <AboutUs />
    </Box>
  );
}

export default HomePage;
