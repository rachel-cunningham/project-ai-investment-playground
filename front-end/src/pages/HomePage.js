import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Typography, Button, Container, Box, CardMedia, Modal } from "@mui/material";
import Logo from "../artwork/landing/wealthify-logo.png";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 750,
  height: 700,
  bgcolor: 'background.paper',
  border: '8px solid #87DBA8',
  boxShadow: 24,
  p: 4,
  borderRadius: '40px',
  textAlign: 'center',
};

function HomePage() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Container sx={{ textAlign: "center" }}>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <CardMedia
          component="img"
          alt="logo"
          image={Logo}
          sx={{ width: '339px', height: 'auto', display: 'flex' }}
        />
      </Box>
      <Typography  
        color="white" 
        sx={{fontSize: '3rem', fontFamily: 'MontBlancBold'}}
      >
        WEALTHIFYAI
      </Typography>
      <Typography variant="body1" color="white" paragraph sx={{fontFamily: "Afacad"}}>
        "Investment advice that works, just for you."
      </Typography>
      <Box sx={{ marginY: 4, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Button
          component={Link}
          to="/sign-up"
          variant="contained"
          color="primary"
          size="large"
          sx={{
            fontFamily: "MontBlancBold",
            textTransform: 'none',
            marginX: 1, 
            mb: 3, 
            borderRadius: '15px', 
            boxShadow: '0 9px 0 #639577', 
            width: 'auto', 
            paddingX: 3,
            color: "#3B0347",
            bgcolor: "#87DBA8",
            '&:hover': {
              bgcolor: "#639577"
            }
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
            textTransform: 'none',
            marginX: 1, 
            mb: 3, 
            borderRadius: '15px', 
            boxShadow: '0 10px 0 #639577', 
            width: 'auto', 
            paddingX: 3,
            color: "#3B0347",
            bgcolor: "#87DBA8",
            '&:hover': {
              bgcolor: "#639577"
            }
          }}
        >
          Log In
        </Button>
      </Box>
      <Typography>
        <Button
          onClick={handleOpen}
          sx={{ textDecoration: 'none', color: "#87DBA8", textTransform: 'none', fontFamily: "Afacad" }}
        >
          How does it work?
        </Button>
      </Typography>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="website description"
        aria-describedby="slides that show how it works"
      >
        <Box sx={style}>
          <Typography id="modal-title" variant="h6" component="h2" sx={{ color: 'tomato' }}>
            Modal Title
          </Typography>
          <Typography id="modal-description" sx={{ mt: 2, color: 'tomato' }}>
            This is a simple modal description.
          </Typography>
          <Button onClick={handleClose} sx={{ mt: 2 }} variant="contained" color="secondary">
            Close Modal
          </Button>
        </Box>
      </Modal>
    </Container>
  );
}

export default HomePage;
