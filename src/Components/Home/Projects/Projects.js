import { Container, Box, Typography } from "@mui/material";
import React from "react";
import "./Projects.css";

const Projects = () => {
  return (
    <Box className="services">
      <Container className="about-container">
        <Box sx={{ textAlign: "center", py: 2 }}>
          <Typography
            style={{
              color: "#f9004d",
              fontWeight: "400",
              fontSize: "16px",
            }}
            variant="h6"
          >
            RECENT PORTFOLIO
          </Typography>
          <Typography
            sx={{
              color: "#c4cfde",
              fontSize: "40px",
              fontWeight: "500",
              letterSpacing: "2px",
              py: 1,
            }}
            variant="h2"
          >
            LATEST PROJECTS
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Projects;
