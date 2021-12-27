import React, { useEffect } from "react";
import { Container, Box, Grid, Typography } from "@mui/material";
import Slider from "react-slick";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Services.css";
import services1 from "../../img/client.png";
import services2 from "../../img/hello.png";
import portfolio from "../../img/portfolio.png";
import code from "../../img/code.png";
import finish from "../../img/finish.png";
import drawing from "../../img/drawing.png";

const services = [
  {
    id: 1,
    icon: services1,
    name: "RESPONSIVE DESIGN",
    des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur dolores voluptas obcaecati quo consequuntur mollitia facilis",
  },
  {
    id: 3,
    icon: services2,
    name: "FAST SUPPORT",
    des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur dolores voluptas obcaecati quo consequuntur mollitia facilis",
  },
  {
    id: 3,
    icon: portfolio,
    name: "USER EXPERIIENCE",
    des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur dolores voluptas obcaecati quo consequuntur mollitia facilis",
  },
  {
    id: 4,
    icon: code,
    name: "CLEAN CODE",
    des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur dolores voluptas obcaecati quo consequuntur mollitia facilis",
  },
  {
    id: 5,
    icon: drawing,
    name: "CREATIVE DESIGN",
    des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur dolores voluptas obcaecati quo consequuntur mollitia facilis",
  },
  {
    icon: finish,
    id: 6,
    name: "BRANDING",
    des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur dolores voluptas obcaecati quo consequuntur mollitia facilis",
  },
];

const Services = () => {
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
    <Box id="services" className="services">
      <Container className="about-container services-container">
        <Box>
          <Grid container spacing={2}>
            <Grid sx={{ textAlign: "center" }} item xs={12} sm={12}>
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
                MY SERVICES
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ my: 4 }}>
          <Slider {...settings}>
            {services.map((service) => (
              <Grid key={service.id}>
                <Box data-aos="fade-up" sx={{ p: 3 }} className="services-card">
                  <Box className="about-icon-card">
                    <Box className="about-icon">
                      <img src={service.icon} alt="" />
                    </Box>
                  </Box>
                  <Typography
                    sx={{
                      color: "#c4cfde",
                      fontsize: "23px",
                      fontweight: "500",
                      py: 1,
                    }}
                    variant="h6"
                  >
                    {service.name}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      color: "#878f99",
                      fontweight: "400",
                    }}
                    variant="h6"
                  >
                    {service.des}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Slider>
        </Box>
      </Container>
    </Box>
  );
};

export default Services;
