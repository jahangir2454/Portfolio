import { Container, Box, Typography } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import img from "../../img/jahangir.png";
import "./Header.css";

const Header = () => {
  const [header, setHeader] = useState(false);

  window.onscroll = () => {
    if (window.scrollY > 120) {
      setHeader(true);
    } else {
      setHeader(false);
    }
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
          <Box className="nav-menu">
            <ul>
              <Link to="">Home</Link>
              <Link to="">Features</Link>
              <Link to="">Pricing</Link>
              <Link className="resume" to="">
                Resume
              </Link>
            </ul>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default Header;
