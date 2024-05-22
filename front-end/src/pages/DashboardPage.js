import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import Avatar from "@mui/material/Avatar";
import AuthHeader from "../components/AuthHeader";
import EditIcon from "../assets/images/icons/EditPlans_Icon.png";
import ViewPlanIcon from "../assets/images/icons/ViewPlans_icon.png";
import StartPlanIcon from "../assets/images/icons/StartPlan_Icon.png";
import ISIcon from "../assets/images/icons/Strat_icon.png";
import TermIcon from "../assets/images/icons/Term_icon.png";
import { Typography, Button, CardMedia } from "@mui/material";

{/* <Box
  sx={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    mb: 2,
  }}
>
  <HowItWorks />
</Box>; */}

function DashboardPage() {
  const history = useNavigate();
  const [salutation, setSalutation] = useState("Good Morning");

  const { userId } = useParams();

  useEffect(() => {
    let date = new Date();

    let hours = date.getHours();

    if (hours >= 12 && hours < 17) {
      setSalutation("Good Afternoon");
    } else if (hours >= 17 && hours <= 24) {
      setSalutation("Good Evening");
    } else {
      setSalutation("Good Morning");
    }
  }, []);

  const goToPlanPage = (planType) => () => {
    history(`/dashboard/${userId}/plans/${planType}`);
  };

  const goToPage = (learningType) => () => {
    history(`/learning-paths/${learningType}`);
  };

  return (
    <Box sx={{ mt: { xs: 8, sm: 2, md: 10, lg: 0 } }}>
      <AuthHeader userId={userId} />
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
        <Grid
          container
          direction="row"
          sx={{
            border: {
              xs: "1px solid #639577",
              sm: "2px solid #639577",
            },
            borderRadius: {
              xs: 20,
              sm: 50,
            },
            padding: {
              xs: 0,
            },
          }}
        >
          <Avatar
            alt="User Avatar"
            sx={{
              width: {
                xs: "60px",
                sm: "120px",
              },
              height: {
                xs: "60px",
                sm: "120px",
              },
              mr: {
                xs: 2,
                sm: 5,
              },
            }}
            // src=""  add a src dynamically based on user image upload from backend
          />
          <Box>
            <Typography
              variant="h2"
              sx={{
                fontFamily: "MontBlancBold",
                textTransform: "capitalize",
                color: "white",
                fontSize: {
                  xs: "1.4rem",
                  sm: "2.7rem",
                  md: "3rem",
                  lg: "3.5rem",
                },
                mt: {
                  xs: 2.5,
                  sm: 4,
                  md: 3,
                },
                mr: {
                  xs: 2,
                  sm: 5,
                },
              }}
            >
              {salutation}, {userId}
            </Typography>
          </Box>
        </Grid>

        <Box sx={{ pt: 3, pl: 3, pr: 3 }}>
          <Typography>
            Before creating your plan, check out your guide for How It Works
          </Typography>
        </Box>

        {/* Box Layouts */}

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            p: 3,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              mt: 1,
            }}
          >
            {/* Box 1 */}
            <Box
              sx={{
                bgcolor: "white",
                border: "8px solid #87DBA8",
                borderRadius: "25px",
                width: "100%",
                textAlign: "center",
                p: 2,
                mb: { xs: 5, lg: 1 },
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Grid
                container
                direction="row"
                justifyContent="space-evenly"
                spacing={2}
              >
                <Grid xs={12}>
                  <Typography variant="h4" sx={{ color: "black" }}>
                    Things To Do
                  </Typography>
                </Grid>
                <Grid
                  className="card"
                  xs={4}
                  onClick={goToPlanPage("latest")}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Button
                    size="large"
                    sx={{
                      textTransform: "none",
                      border: "3px solid #87DBA8",
                      borderRadius: "15px",
                      boxShadow: "0 5px 0 #87DBA8",
                      padding: { xs: "1px 50px", lg: "10px 30px" },
                      "&:hover": {
                        border: "3px solid #639577",
                        boxShadow: "0 5px 0 #639577",
                      },
                      mb: 1,
                      width: "100%",
                      height: "100%",
                    }}
                  >
                    <CardMedia
                      component="img"
                      src={EditIcon}
                      alt="Pie graph icon"
                      sx={{
                        width: {
                          xs: "20px",
                          sm: "30px",
                          md: "35px",
                          lg: "40px",
                        },
                        mr: 1,
                      }}
                    />
                    <Typography
                      sx={{
                        color: "#3B0347",
                        fontFamily: "MontBlancBold",
                        fontSize: {
                          xs: "0.8rem",
                          sm: "1rem",
                          md: "1.5rem",
                          lg: "1.2rem",
                        },
                        padding: { md: "10px 5px", lg: "10px 10px" },
                      }}
                    >
                      Most Recent Plan
                    </Typography>
                  </Button>
                </Grid>
                <Grid
                  className="card"
                  xs={4}
                  onClick={goToPlanPage("")}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Button
                    size="large"
                    sx={{
                      textTransform: "none",
                      border: "3px solid #87DBA8",
                      borderRadius: "15px",
                      boxShadow: "0 5px 0 #87DBA8",
                      padding: { xs: "1px 50px", lg: "10px 30px" },
                      "&:hover": {
                        border: "3px solid #639577",
                        boxShadow: "0 5px 0 #639577",
                      },
                      mb: 1,
                      width: "100%",
                      height: "100%",
                    }}
                  >
                    <CardMedia
                      component="img"
                      src={ViewPlanIcon}
                      alt="Bar chart icon"
                      sx={{
                        width: {
                          xs: "20px",
                          sm: "30px",
                          md: "35px",
                          lg: "40px",
                        },
                        mr: 1,
                      }}
                    />
                    <Typography
                      sx={{
                        color: "#3B0347",
                        fontFamily: "MontBlancBold",
                        fontSize: {
                          xs: "0.8rem",
                          sm: "1rem",
                          md: "1.5rem",
                          lg: "1.2rem",
                        },
                        padding: { md: "10px 5px", lg: "10px 10px" },
                      }}
                    >
                      View Plans
                    </Typography>
                  </Button>
                </Grid>
                <Grid
                  className="card"
                  xs={4}
                  onClick={goToPlanPage("new")}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Button
                    size="large"
                    sx={{
                      textTransform: "none",
                      border: "3px solid #87DBA8",
                      borderRadius: "15px",
                      boxShadow: "0 5px 0 #87DBA8",
                      padding: { xs: "1px 50px", lg: "10px 30px" },
                      "&:hover": {
                        border: "3px solid #639577",
                        boxShadow: "0 5px 0 #639577",
                      },
                      mb: 1,
                      width: "100%",
                      height: "100%",
                    }}
                  >
                    <CardMedia
                      component="img"
                      src={StartPlanIcon}
                      alt="Plus sign icon"
                      sx={{
                        width: {
                          xs: "20px",
                          sm: "30px",
                          md: "35px",
                          lg: "40px",
                        },
                        mr: 1,
                      }}
                    />
                    <Typography
                      sx={{
                        color: "#3B0347",
                        fontFamily: "MontBlancBold",
                        fontSize: {
                          xs: "0.8rem",
                          sm: "1rem",
                          md: "1.5rem",
                          lg: "1.2rem",
                        },
                        padding: { md: "10px 5px", lg: "10px 10px" },
                      }}
                    >
                      Start New Plan
                    </Typography>
                  </Button>
                </Grid>
              </Grid>
            </Box>
            {/* Box 2  */}
            <Box
              sx={{
                bgcolor: "white",
                border: "8px solid #87DBA8",
                borderRadius: "25px",
                width: "100%",
                textAlign: "center",
                p: 2,
                mb: { xs: 5, lg: 1 },
                mt: 4,
              }}
            >
              <Grid
                container
                direction="row"
                spacing={2}
                justifyContent="space-evenly"
              >
                <Grid xs={12}>
                  <Typography variant="h4" sx={{ color: "black" }}>
                    Learning Path Resources
                  </Typography>
                </Grid>
                <Grid
                  className="card"
                  xs={6}
                  onClick={goToPage("articles")}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Button
                    size="large"
                    sx={{
                      textTransform: "none",
                      border: "3px solid #87DBA8",
                      borderRadius: "15px",
                      boxShadow: "0 5px 0 #87DBA8",
                      padding: { xs: "1px 65px", lg: "10px 30px" },
                      "&:hover": {
                        border: "3px solid #639577",
                        boxShadow: "0 5px 0 #639577",
                      },
                      mb: 1,
                      width: "100%",
                      height: "100%",
                    }}
                  >
                    <CardMedia
                      component="img"
                      src={ISIcon}
                      alt="Light bulb icon"
                      sx={{
                        width: {
                          xs: "20px",
                          sm: "30px",
                          md: "35px",
                          lg: "40px",
                        },
                        mr: 1,
                      }}
                    />
                    <Typography
                      sx={{
                        color: "#3B0347",
                        fontFamily: "MontBlancBold",
                        fontSize: {
                          xs: "0.8rem",
                          sm: "1rem",
                          md: "1.5rem",
                          lg: "1.2rem",
                        },
                        padding: { md: "10px 5px", lg: "10px 10px" },
                      }}
                    >
                      Investment Strategies
                    </Typography>
                  </Button>
                </Grid>
                <Grid
                  className="card"
                  xs={6}
                  onClick={goToPage("terms")}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Button
                    size="large"
                    sx={{
                      textTransform: "none",
                      border: "3px solid #87DBA8",
                      borderRadius: "15px",
                      boxShadow: "0 5px 0 #87DBA8",
                      padding: { xs: "1px 65px", lg: "10px 30px" },
                      "&:hover": {
                        border: "3px solid #639577",
                        boxShadow: "0 5px 0 #639577",
                      },
                      mb: 1,
                      width: "100%",
                      height: "100%",
                    }}
                  >
                    <CardMedia
                      component="img"
                      src={TermIcon}
                      alt="Letter icon"
                      sx={{
                        width: {
                          xs: "20px",
                          sm: "30px",
                          md: "35px",
                          lg: "40px",
                        },
                        mr: 1,
                      }}
                    />
                    <Typography
                      sx={{
                        color: "#3B0347",
                        fontFamily: "MontBlancBold",
                        fontSize: {
                          xs: "0.8rem",
                          sm: "1rem",
                          md: "1.5rem",
                          lg: "1.2rem",
                        },
                        padding: { md: "10px 5px", lg: "10px 10px" },
                      }}
                    >
                      Terminology
                    </Typography>
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default DashboardPage;
