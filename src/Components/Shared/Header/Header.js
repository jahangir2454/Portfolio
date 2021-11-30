import { Container, Box, Typography } from "@mui/material";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { HashLink } from "react-router-hash-link";
import img from "../../img/jahangir.png";
import pdf from "../../img/jahangir.pdf";
import "./Header.css";

const Header = () => {
  const [header, setHeader] = useState(false);
  const [bars, setBars] = useState(false);

  window.onscroll = () => {
    if (window.scrollY > 120) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };
  const hendlebars = () => {
    bars ? setBars(false) : setBars(true);
  };

  const downresume = () => {
    toast.dark("🦄 Successfully Download Resume !", {
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
    <div className={header ? "main-header2" : "main-header"}>
      <Container>
        <Box className="header-content">
          <Box className="header-img">
            <img src={img} alt="" />
            <Typography className="header-text" variant="h6">
              JAHANGIR
            </Typography>
          </Box>
          <Box className={bars ? "nav-menu2" : "nav-menu"}>
            <ul>
              <HashLink smooth to="/home#home">
                Home
              </HashLink>
              <HashLink smooth to="/home#services">
                Services
              </HashLink>
              <HashLink smooth to="/home#about">
                About Me
              </HashLink>
              <HashLink smooth to="/home#projects">
                Projects
              </HashLink>
              <HashLink smooth to="/home#contact">
                Contact
              </HashLink>
              <a
                onClick={downresume}
                className="resume"
                href={pdf}
                target="_blank"
                rel="noopener noreferrer"
                download
              >
                Resume
              </a>
              <ToastContainer />
            </ul>
          </Box>
          <a
            onClick={downresume}
            className="resume2"
            href={pdf}
            target="_blank"
            rel="noopener noreferrer"
            download
          >
            Resume
          </a>
          <Box className="header-bars">
            {!bars ? (
              <i onClick={hendlebars} class="fas fa-bars"></i>
            ) : (
              <i onClick={hendlebars} className="fas fa-times"></i>
            )}
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default Header;
