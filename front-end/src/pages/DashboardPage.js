import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import CardMedia from "@mui/material/CardMedia";
import InvestImage from "../assets/images/dashboard/invest.jpeg";
import ProfileImage from "../assets/images/dashboard/blank-profile-picture.png";

function DashboardPage() {
  return (
    <Box>
      <Grid
        container
        spacing={2}
        direction="column"
        justify="space-between"
        alignItems="flex-start"
      >
        <Container>
          <Stack direction="row" spacing={2}>
            <h1>Welcome Back, !</h1>
              <Avatar alt="blank profile pic" src={ProfileImage} style={{color:"#CB88A"}}/>
          </Stack>
        </Container>
      </Grid>
      <Grid
        container
        spacing={2}
        direction="column"
        justify="space-between"
        alignItems="center"
      >
        <Container>
          <h4> How Can I Help You?</h4>
          <Divider></Divider>
          <Card variant="outlined">
            <CardActionArea>
              <CardContent>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  Get A New Advice Strategy From Your Virtual Assistant
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Let's Chat
              </Button>
            </CardActions>
          </Card>
        </Container>
        <Container>

        <Card variant="outlined">
          <CardActionArea>
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              Review Advice From Your Virtual Assistant
              </Typography>
            </CardContent>
          </CardActionArea>
          <Button size="small" color="primary">
          Let's Review
        </Button>
          </Card>
        </Container>
        <Container>
          <h4>Become an Investment Rock Star</h4>
        <Divider>
        </Divider>
        <Container>
        <Card variant="outlined" color="white">
          <CardMedia
          component="img"
        alt="stacks of coins"
        height="140"
        image={InvestImage}
          />
          <CardActionArea>
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              Investment strategies
              </Typography>
            </CardContent>
          </CardActionArea>
          <Button size="small">
          Learn More
        </Button>
          </Card>
        </Container>
        <Container>
        <Card variant="outlined" color="white">
          <CardMedia
          component="img"
        alt="stacks of coins"
        height="140"
        image={InvestImage}
          />
          <CardActionArea>
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              Terminology
              </Typography>
            </CardContent>
          </CardActionArea>
          <Button size="small">
          Learn More
        </Button>
          </Card>
        </Container>
        <Container sx={{ mb: 3 }}>
        <Card variant="outlined" color="white">
          <CardMedia
          component="img"
        alt="stacks of coins"
        height="140"
        image={InvestImage}
          />
          <CardActionArea>
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              Benchmark Examples
              </Typography>
            </CardContent>
          </CardActionArea>
          <Button size="small">
          Learn More
        </Button>
          </Card>
        </Container>
        </Container>
      </Grid>
    </Box>
  );
}

export default DashboardPage;
