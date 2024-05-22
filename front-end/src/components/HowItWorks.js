import React, { useState } from "react";
import {
  Typography,
  Button,
  Box,
  CardMedia,
  Modal,
  ButtonBase,
} from "@mui/material";
import next from "../assets/images/icons/next_button.png";
import back from "../assets/images/icons/back_button.png";
import create from "../assets/images/icons/createacount_icon.png";
import compass from "../assets/images/icons/Vector.png";
import select from "../assets/images/icons/start_new_plan.png";
import question from "../assets/images/icons/Vector-1.png";
import graph from "../assets/images/icons/Vector-3.png";

// modal style variables
const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
  maxWidth: 800,
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

function HowItWorks() {
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
              alignItems: "center",
              justifyContent: "center",
              flex: 1,
            }}
          >
            {modalContent[modalStep].images.length > 0 && (
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  justifyContent: "center",
                  alignItems: "center",
                  mt: 2,
                  gap: 2,
                }}
              >
                {modalContent[modalStep].images.map((image, index) => (
                  <Box
                    key={index}
                    sx={{
                      textAlign: "center",
                      flex: 1,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
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
              position: "absolute",
              top: "50%",
              left: 0,
              right: 0,
              transform: "translateY(-50%)",
              display: "flex",
              justifyContent: "space-between",
              px: 2,
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
    </Box>
  );
}

export default HowItWorks;
