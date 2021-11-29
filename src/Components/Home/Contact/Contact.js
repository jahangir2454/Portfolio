import React, { useEffect } from "react";
import { Container, Box, Typography, Grid } from "@mui/material";
import emailjs from "emailjs-com";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Contact.css";

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  // form
  const submit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_h32exwm",
        "template_a0vxweb",
        e.target,
        "user_NBL2BCzdTrKwJ1FGJrTo3"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

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
        <Box sx={{ pt: 3 }}>
          <Grid
            sx={{ display: "flex", justifyContent: "center" }}
            container
            spacing={2}
          >
            <Grid
              data-aos="fade-up"
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
              }}
              item
              xs={12}
              md={12}
            >
              <Box sx={{ py: 2 }}>
                <Typography
                  style={{
                    color: "#f9004d",
                    fontWeight: "400",
                    fontSize: "16px",
                  }}
                  variant="subtitle2"
                >
                  CONTACT
                </Typography>
                <Typography
                  sx={{
                    color: "#c4cfde",
                    fontSize: "50px",
                    fontWeight: 600,
                    letterSpacing: "2px",
                  }}
                  variant="h3"
                >
                  Contact With Me
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={5}>
            <Box data-aos="fade-up" className="contact-text">
              <img
                src="https://inbio-react.netlify.app/static/5930a183f9be0c913e9d25b1318416f9/3a710/contact1.webp"
                alt=""
              />
              <Typography
                sx={{
                  color: "#f9004d",
                  fontSize: "35px",
                  fontWeight: "500",
                  letterSpacing: "1px",
                  py: 1,
                }}
                variant="h2"
              >
                JAHANGIR ALAM
              </Typography>
              <Typography
                sx={{
                  fontSize: "25px",
                  color: "#c4cfde",
                  fontWeight: "500",
                  letterSpacing: "1px",
                }}
                variant="h5"
              >
                Web Developer
              </Typography>
              <Typography
                sx={{
                  color: "#878e99",
                  fontSize: "18px",
                  fontWeight: "500",
                  py: 1,
                }}
                variant="h6"
              >
                I am available for you. Connect with me via and call in to my
                account.
              </Typography>
              <Typography
                sx={{ color: "#c4cfde", fontSize: "18px", py: 1 }}
                variant="h5"
              >
                Phone : <span className="contact-number">+880 1888599282</span>
              </Typography>
              <Typography
                sx={{ color: "#c4cfde", fontSize: "18px" }}
                variant="h5"
              >
                Email :{" "}
                <span className="contact-number">
                  jahangiralamjebin@gmail.com
                </span>
              </Typography>
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
          <Grid item xs={12} sm={7}>
            <Box data-aos="fade-left" className="contact">
              <Box>
                <form onSubmit={submit}>
                  <label htmlFor="name">Your Name </label>
                  <br />
                  <input type="text" name="name" /> <br />
                  <label htmlFor="name">Email</label> <br />
                  <input type="email" required name="email" /> <br />
                  <label htmlFor="name">subject</label> <br />
                  <input type="text" name="subject" /> <br />
                  <label htmlFor="name">Your Message</label> <br />
                  <textarea type="text" name="message" />
                  <button type="submit" className="send-btn">
                    SEND MESSAGE <i className="fas fa-paper-plane"></i>
                  </button>
                </form>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;
