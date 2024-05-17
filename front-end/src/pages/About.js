import React from "react";
import { Typography, Container, Box, Grid, Card, CardContent, Divider } from "@mui/material";


function AboutPage() {
  return (
    <Container maxWidth="100%" sx={{ textAlign: "center", marginTop: 8 }}>
      <Typography variant="h2" paragraph>
        About WealthifyAI
      </Typography>
      <Typography variant="h4" paragraph>
        Let us do the hard work for you!
      </Typography>
      <Divider ></Divider>
      <Grid container spacing={4} justifyContent="center" sx={{ marginTop: 4 }}>
        <Grid item xs={12} md={6}>
          <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ flex: '1 1 auto' }}>
              <Typography variant="h6" gutterBottom sx={{ textDecoration: 'underline', color: "#000000" }}>
                Our Team
              </Typography>
              <Typography sx={{color: "#000000"}}>
                Our team consists of financial experts, data scientists, and software engineers who are passionate about making investing accessible to everyone. We are dedicated to continuously improving our platform and providing you with the best possible experience.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ flex: '1 1 auto' }}>
              <Typography variant="h6" gutterBottom sx={{ textDecoration: 'underline', color: "#000000" }}>
                Our Mission
              </Typography>
              <Typography sx={{color: "#000000"}}>
                At WealthifyAI, we want to empower you with the tools and insights you need to make informed investment decisions with confidence. Whether you're just starting your investment journey or looking to optimize your portfolio, WealthifyAI offers personalized advice, expert insights, and a user-friendly platform to help you achieve your financial goals.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Box sx={{ marginTop: 4 }}>
        <Card>
          <CardContent>
            <Typography variant="h6" gutterBottom sx={{ textDecoration: 'underline', color: "#000000" }}>
                Unsure where to start?
            </Typography>
            <Typography gutterBottom sx={{color: "#000000"}}>
              Just answer our simple and easy to understand prompts such as "How much would you like to invest?", "How long would you like to invest?", and "How much risk are you willing to take?" and we will fins the best portfolio options to fit your needs.
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
}

export default AboutPage;
