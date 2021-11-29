import { Container, Box, Grid } from "@mui/material";
import React from "react";
import { Typewriter } from "react-simple-typewriter";

import "./Banner.css";
import banner from "../../img/jebin.png";

const Banner = () => {
  return (
    <Box className="banner">
      <Container>
        <Box>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={7}>
              <Box className="banner-heading">
                <h4>WELCOME TO MY WORLD</h4>
                <h2>
                  Hi, I’m <span>JAHANGIR ALAM</span>
                </h2>
                <h3>
                  A
                  <span>
                    <Typewriter
                      loop
                      cursor
                      cursorStyle="..."
                      typeSpeed={100}
                      deleteSpeed={50}
                      delaySpeed={1000}
                      words={[
                        " Developer .",
                        " Professional coder .",
                        " Designer .",
                      ]}
                    />
                  </span>
                </h3>
                <p>
                  I use animation as a third dimension by which to simplify
                  experiences and kuiding thro each and every interaction. I’m
                  not adding motion just to spruce things up, but doing it in
                  ways that.
                </p>
                <Box className="social-icon-card">
                  <p>FIND WITH ME</p>
                  <Box className="banner-font">
                    <a
                      target="_blank"
                      href="https://www.facebook.com/jahangiralam.jebin/"
                    >
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a target="_blank" href="https://twitter.com/jahangir2454">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a
                      target="_blank"
                      href="https://www.linkedin.com/in/jahangir-alam-jebin/"
                    >
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={5}>
              <Box
                style={{
                  background: `url(${banner})`,
                  backgroundPosition: "left",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
                className="banner-img"
              ></Box>
            </Grid>
          </Grid>
        </Box>
        <Box></Box>
      </Container>
    </Box>
  );
};

export default Banner;
