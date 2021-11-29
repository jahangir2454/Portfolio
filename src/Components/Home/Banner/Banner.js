import React, { useEffect } from "react";
import { Container, Box, Grid } from "@mui/material";
import { Typewriter } from "react-simple-typewriter";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Banner.css";
import banner from "../../img/jebin.png";

const Banner = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <Box className="banner">
      <Container>
        <Box>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={7}>
              <Box data-aos="fade-up" className="banner-heading">
                <Box>
                  <Box sx={{ my: 1 }} className="banner-user">
                    <Box className="banner-user-icon">
                      <i className="far fa-user"></i>
                    </Box>
                  </Box>
                </Box>
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
                      cursorStyle=".."
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
                data-aos="fade-left"
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
