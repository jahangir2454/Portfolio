import { Container, Box, Typography, Grid } from "@mui/material";
import React, { useEffect } from "react";
import Slider from "react-slick";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Projects.css";
import project from "../../img/bikes-clubs.png";
import project2 from "../../img/health.png";
import project3 from "../../img/travel.png";
import project4 from "../../img/bitcoin.png";
import project5 from "../../img/Bion.png";
import project6 from "../../img/Europa-sounds.png";

const projects = [
  {
    id: 1,
    img: project6,
    liveLink: "https://jahangiralam245424.netlify.app/",
    codeLink: "https://github.com/jahangir2454/Europa-Sounds",
  },
  {
    id: 2,
    img: project5,
    liveLink: "https://jahangiralam.netlify.app/",
    codeLink: "https://github.com/jahangir2454/Bion-coin",
  },
  {
    id: 3,
    img: project,
    liveLink: "https://bikes-clubs.web.app/",
    codeLink: "https://github.com/jahangir2454/Bike-Club",
  },
  {
    id: 4,
    img: project2,
    liveLink: "https://family-health-care-f1f0b.web.app/home",
    codeLink: "https://github.com/jahangir2454/Health-Care",
  },
  {
    id: 5,
    img: project3,
    liveLink: "https://travelapp-c4cfa.web.app/home",
    codeLink: "https://github.com/jahangir2454/TRAVESIA",
  },
  {
    id: 6,
    img: project4,
    liveLink: "https://keen-keller-1b0f76.netlify.app/",
    codeLink: "https://github.com/jahangir2454/bitcoin",
  },
];

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  function SampleNextArrow({ onClick }) {
    return (
      <div className="arrow next" onClick={onClick}>
        <Box className="arrows-bg">
          <i className="fas fa-arrow-right"></i>
        </Box>
      </div>
    );
  }

  function SamplePrevArrow({ onClick }) {
    return (
      <div className="arrow prev" onClick={onClick}>
        <Box className="arrows-bg">
          <i className="fas fa-arrow-left"></i>
        </Box>
      </div>
    );
  }
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Box id="projects" className="services">
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

        <Slider {...settings}>
          {projects.map((item) => (
            <Grid key={item.id}>
              <Box
                data-aos="fade-up"
                sx={{ margin: "10px" }}
                className="projects-img"
              >
                <Box>
                  <img src={item.img} alt="" />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                  }}
                  className="projects-link"
                >
                  <a href={item.liveLink} target="_blank" rel="noreferrer">
                    Live Preview
                  </a>
                  <a href={item.codeLink} target="_blank" rel="noreferrer">
                    Code preview
                  </a>
                </Box>
              </Box>
            </Grid>
          ))}
        </Slider>
      </Container>
    </Box>
  );
};

export default Projects;
