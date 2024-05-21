import { Box, Divider, Typography } from "@mui/material";
import React from "react";

export default function AboutUs() {
  return (
    <Box 
    id='about-us'
    sx={{
        px: 10,
        mb: 4
    }}
    >
      <Typography
        variant="h1"
        sx={{
          fontFamily: 'MontBlancBold',
          textAlign: 'center',
          color: '#87DBA8',
          fontSize: '103px',
          mt: 4,
        }}
      >
        About Us
      </Typography>
      <Divider
        sx={{
          display: 'flex',
          backgroundColor: '#87DBA8',
          height: '6px',
          maxWidth: "80%",
          margin: "0 auto",
        }}
      />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          mt: 8,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            textAlign: 'center',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            mx: 4,
            width: '100%',
            mb: 4,
          }}
        >
          <Typography
            sx={{
              fontFamily: 'MontBlancBold',
              textAlign: 'center',
              color: '#87DBA8',
              fontSize: '61px',
              flex: 1,
            }}
          >
            Our Team
          </Typography>
          <Box
            sx={{
              bgcolor: 'white',
              border: '8px solid #87DBA8',
              borderRadius: '25px',
              width: '50%',
              maxWidth: '600px',
              flex: 1,
            }}
          >
            <Typography
              sx={{
                color: '#3B0347',
                fontSize: '20px',
                fontWeight: 700,
                px: 4,
                py: 2
              }}
            >
              Our team consists of financial experts, data scientists, and software engineers who are passionate about making investing accessible to everyone. We are dedicated to continuously improving our platform and providing you with the best possible experience.
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            textAlign: 'center',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            mx: 4,
            width: '100%',
          }}
        >
          <Typography
            sx={{
              fontFamily: 'MontBlancBold',
              textAlign: 'center',
              color: '#87DBA8',
              fontSize: '61px',
              flex: 1,
            }}
          >
            Our Mission
          </Typography>
          <Box
            sx={{
              bgcolor: 'white',
              border: '8px solid #87DBA8',
              borderRadius: '25px',
              width: '50%',
              maxWidth: '600px',
              flex: 1,
            }}
          >
            <Typography
              sx={{
                color: '#3B0347',
                fontSize: '20px',
                fontWeight: 700,
                px: 4,
                py: 2
              }}
            >
              Our team consists of financial experts, data scientists, and software engineers who are passionate about making investing accessible to everyone. We are dedicated to continuously improving our platform and providing you with the best possible experience.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
