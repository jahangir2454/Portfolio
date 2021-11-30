import { Container, Box, Grid } from "@mui/material";
import React, { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "./About.css";
import aboutImg from "../../img/jebin.png";
import pdf from "../../img/jahangir.pdf";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const downresum = () => {
    alert("Successfully Download Resume ");
  };
  return (
    <Box
      id="about"
      className="about-section"
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
              <Box data-aos="fade-right" className="about-img">
                <img
                  style={{ width: "100%", height: "100%" }}
                  src={aboutImg}
                  alt=""
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={7}>
              <Box data-aos="fade-left" className="about-text">
                <h6>VISIT MY PORTFOLIO & HIRE ME</h6>
                <h2>ABOUT ME</h2>
                <p>
                  I developed several web-based applications for a project
                  management software client These cloud-based applications
                  tracked and managed information technology project information
                  for several of the world's largest financial companies.{" "}
                </p>
                <div sx={{ my: 2 }} className="all-btn">
                  <a
                    onClick={downresum}
                    target="_blank"
                    href={pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    download
                  >
                    Download My Resume
                  </a>
                  <ToastContainer />
                </div>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default About;
