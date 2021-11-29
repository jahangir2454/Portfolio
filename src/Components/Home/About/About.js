import { Container, Box, Grid } from "@mui/material";
import React from "react";
import "./About.css";
import aboutImg from "../../img/jebin.png";

const About = () => {
  return (
    <Box
      sx={{
        background: "#212428",
        py: 3,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container className="about-container">
        <Box sx={{ pt: 5 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={5}>
              <Box className="about-img">
                <img
                  style={{ width: "100%", height: "100%" }}
                  src={aboutImg}
                  alt=""
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={7}>
              <Box className="about-text">
                <h6>VISIT MY PORTFOLIO & HIRE ME</h6>
                <h2>About Me</h2>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Quibusdam consectetur ex provident deserunt eaque facere
                  architecto cupiditate voluptate eveniet mollitia animi
                  voluptatem id iste aliquam sunt nulla minima praesentium at
                  quod harum quos, tempora saepe sint laborum? Saepe voluptas
                  quidem maxime tenetur assumenda labore sed obcaecati, est
                  doloremque earum molestiae beatae veniam provident deserunt
                </p>
                <button className="all-btn">Download My Resume</button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default About;
