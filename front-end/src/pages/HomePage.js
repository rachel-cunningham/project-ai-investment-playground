import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Typography,
  Button,
  Container,
  Box,
  CardMedia,
  Modal,
  ButtonBase,
} from "@mui/material";
import Logo from "../assets/images/logo/WealthifyAI-logo.png";
import next from "../artwork/landing/next-button.png";
import back from "../artwork/landing/back-button.png";
import create from "../artwork/landing/create.png";
import compass from "../artwork/landing/compass.png";
import select from "../artwork/landing/select.png";
import question from "../artwork/landing/question.png";
import graph from "../artwork/landing/graph.png";
import Header from "../components/Header";

// modal style variables
const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
  maxWidth: 650,
  height: "90%",
  maxHeight: 650,
  bgcolor: "background.paper",
  border: "12px solid #87DBA8",
  boxShadow: 24,
  p: 4,
  borderRadius: "40px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",
};

const gradientTextStyle = {
  background: "linear-gradient(45deg, #6E3979, #3B0B47)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
};

const disabledStyle = {
  filter: "grayscale(100%)",
  opacity: 0.5,
};

function HomePage() {
  const [open, setOpen] = useState(false);
  const [modalStep, setModalStep] = useState(0);

  const handleOpen = () => {
    setModalStep(0);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);
  const handleNext = () => setModalStep((prevStep) => prevStep + 1);
  const handleBack = () => setModalStep((prevStep) => prevStep - 1);

  const modalContent = [
    {
      title: "How it works",
      images: [
        { src: create, description: "Create an account" },
        { src: compass, description: "Explore your options" },
      ],
    },
    {
      title: "How it works",
      images: [
        { src: select, description: 'Select "Start New Plan" Section' },
        { src: question, description: "Answer Some Questions" },
      ],
    },
    {
      title: "How it works",
      images: [
        {
          src: graph,
          description:
            "Then you'll have your unique investment plan to inform your investment journey.",
        },
      ],
    },
  ];

  return (
    <Box>
      <Header />
      <Container sx={{ textAlign: "center" }}>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <CardMedia
            component="img"
            alt="logo"
            image={Logo}
            sx={{ width: "339px", height: "auto", display: "flex" }}
          />
        </Box>
        <Typography
          color="white"
          sx={{ fontSize: "3rem", fontFamily: "MontBlancBold" }}
        >
          WEALTHIFYAI
        </Typography>
        <Typography
          variant="body1"
          color="white"
          paragraph
          sx={{ fontFamily: "Afacad" }}
        >
          "Investment advice that works, just for you."
        </Typography>
        <Box
          sx={{
            marginY: 4,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
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
              textTransform: "none",
              marginX: 1,
              borderRadius: "15px",
              boxShadow: "0 9px 0 #639577",
              width: "auto",
              paddingX: 3,
              color: "#3B0347",
              bgcolor: "#87DBA8",
              "&:hover": {
                bgcolor: "#639577",
              },
            }}
          >
            Get Started
          </Button>
          <Button
            component={Link}
            to="/log-in"
            variant="contained"
            color="primary"
            size="large"
            sx={{
              fontFamily: "MontBlancBold",
              textTransform: "none",
              marginX: 1,
              borderRadius: "15px",
              boxShadow: "0 10px 0 #639577",
              width: "auto",
              paddingX: 3,
              color: "#3B0347",
              bgcolor: "#87DBA8",
              "&:hover": {
                bgcolor: "#639577",
              },
            }}
          >
            Log In
          </Button>
        </Box>
        <Typography>
          <Button
            onClick={handleOpen}
            sx={{
              textDecoration: "none",
              color: "#87DBA8",
              textTransform: "none",
              fontFamily: "Afacad",
            }}
          >
            How does it work?
          </Button>
        </Typography>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="website description"
          aria-describedby="slides that show how it works"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box sx={modalStyle}>
            <Box
              className="modal-header"
              sx={{ width: "100%", textAlign: "center" }}
            >
              <Typography
                variant="h6"
                component="h2"
                sx={{ ...gradientTextStyle, marginTop: 0, fontSize: 58 }}
              >
                {modalContent[modalStep].title}
              </Typography>
            </Box>
            <Box
              sx={{
                textAlign: "center",
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              {modalContent[modalStep].images.length > 0 && (
                <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
                  {modalContent[modalStep].images.map((image, index) => (
                    <Box
                      key={index}
                      sx={{ textAlign: "center", margin: "auto" }}
                    >
                      <CardMedia
                        component="img"
                        alt={`image-${index}`}
                        image={image.src}
                        sx={{
                          width: "100%",
                          maxWidth: "200px",
                          height: "auto",
                          margin: "auto",
                        }}
                      />
                      <Typography sx={{ mt: 1, color: "black", fontSize: 30 }}>
                        {image.description}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              )}
            </Box>
            <Box
              sx={{
                mt: 4,
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <ButtonBase
                onClick={handleBack}
                disabled={modalStep === 0}
                sx={{ color: "#87DBA8" }}
              >
                <CardMedia
                  component="img"
                  alt="back button"
                  image={back}
                  sx={{
                    width: 50,
                    height: 50,
                    ...(modalStep === 0 && disabledStyle),
                  }}
                />
              </ButtonBase>
              <ButtonBase
                onClick={handleNext}
                disabled={modalStep === modalContent.length - 1}
                sx={{ color: "#87DBA8" }}
              >
                <CardMedia
                  component="img"
                  alt="next button"
                  image={next}
                  sx={{
                    width: 50,
                    height: 50,
                    ...(modalStep === modalContent.length - 1 && disabledStyle),
                  }}
                />
              </ButtonBase>
            </Box>
          </Box>
        </Modal>
      </Container>
    </Box>
  );
}

export default HomePage;
