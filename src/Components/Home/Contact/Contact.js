import React, { useEffect } from "react";
import { Container, Box, Typography, Grid } from "@mui/material";
import emailjs from "emailjs-com";
import AOS from "aos";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
    toast.dark("🦄 Successfully Send Message !", {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <Box
      id="contact"
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
              <Box className="contact-heading" sx={{ py: 2 }}>
                <p>CONTACT</p>
                <h3>Contact With Me</h3>
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
              <h2>JAHANGIR ALAM</h2>
              <h5>Web Developer</h5>
              <h6>
                I am available for you. Connect with me via and call in to my
                account.
              </h6>
              <p>
                Phone : <span className="contact-number">+880 1888599282</span>
              </p>
              <p>
                Email :{" "}
                <span className="contact-number">
                  jahangiralamjebin@gmail.com
                </span>
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
          <Grid item xs={12} sm={7}>
            <Box data-aos="fade-left" className="contact">
              <Box>
                <form onSubmit={submit}>
                  <label htmlFor="name">Your Name </label>
                  <br />
                  <input required type="text" name="name" /> <br />
                  <label htmlFor="name">Email</label> <br />
                  <input type="email" required name="email" /> <br />
                  <label htmlFor="name">subject</label> <br />
                  <input required type="text" name="subject" /> <br />
                  <label htmlFor="name">Your Message</label> <br />
                  <textarea required type="text" name="message" />
                  <button type="submit" className="send-btn">
                    SEND MESSAGE <i className="fas fa-paper-plane"></i>
                  </button>
                  <ToastContainer />
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
