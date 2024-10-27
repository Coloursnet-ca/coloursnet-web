import React, { useState, useEffect, useMemo } from "react";
import {
  Box,
  Typography,
  SpeedDial,
  SpeedDialAction,
  Dialog,
  DialogActions,
  IconButton,
} from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import CloseIcon from "@mui/icons-material/Close";
import assets from "../assets/images";
import colors from "../assets/colors";
import contactData from "../assets/data/contactData";

const HeroCarousel = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [openDial, setOpenDial] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");

  const slides = useMemo(
    () => [
      {
        title: "Protect What Matters Most",
        description: "Professional CCTV solutions for your home and business",
        image: assets.images.carousel1,
        alt: "CCTV solutions for home and business security by Coloursnet",
      },
      {
        title: "24/7 Security Coverage",
        description: "Round-the-clock monitoring and support",
        image: assets.images.carousel2,
        alt: "24/7 security monitoring services provided by Coloursnet",
      },
      {
        title: "Expert Installation",
        description: "Professional setup by certified technicians",
        image: assets.images.carousel3,
        alt: "Certified technicians performing CCTV installation",
      },
    ],
    []
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const handleActionClick = (href) => {
    if (href.startsWith("tel:")) {
      setPhoneNumber(href);
      setOpenModal(true);
    } else {
      window.open(href, "_blank");
    }
  };

  return (
    <Box
      overflow="hidden"
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{
        position: "relative",
        aspectRatio: { xs: "4 / 3", md: "2.35 / 1" },
        width: "100%",
      }}
    >
      <Carousel
        showThumbs={false}
        showStatus={false}
        selectedItem={currentImage}
        autoPlay
        interval={5000}
        infiniteLoop
        transitionTime={800}
        swipeable
      >
        {slides.map((slide, index) => (
          <div key={index} style={{ position: "relative" }}>
            <img
              src={slide.image}
              alt={slide.alt}
              loading="lazy"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                aspectRatio: "4 / 3",
              }}
              aria-label={slide.title}
            />
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background: "rgba(0, 0, 0, 0.5)",
                zIndex: 1,
              }}
            />
          </div>
        ))}
      </Carousel>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          textAlign: "center",
          padding: "20px",
          borderRadius: "10px",
          width: { xs: "90%", sm: "80%", md: "60%" },
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <Typography
          component="h1"
          variant="h1"
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: "center",
            fontSize: "clamp(3rem, 10vw, 3.5rem)",
          }}
        >
          {slides[currentImage].title}
        </Typography>
        <Typography
          sx={{
            textAlign: "center",
            width: { sm: "100%", md: "80%" },
            mb: 2,
          }}
        >
          {slides[currentImage].description}
        </Typography>

        <Box
          sx={{
            position: "relative",
            display: { xs: "none", md: "block" },
            "& .MuiSpeedDial-root": {
              position: "static",
              "& .MuiButtonBase-root": {
                width: "auto",
                height: "auto",
                borderRadius: "12px",
                backgroundColor: colors.primary,
                color: "#fff",
                borderWidth: 2,
                boxShadow: "none",
                padding: "8px 22px",
              },
            },
            "& .MuiSpeedDial-actions": {
              display: "flex",
              justifyContent: "center",
              flexDirection: "row",
              mt: "2px",
              padding: "16px 0",
            },
          }}
        >
          <SpeedDial
            ariaLabel="Get in Touch"
            icon={
              <Typography
                sx={{
                  fontSize: "1.2rem",
                  fontWeight: 500,
                  textTransform: "none",
                }}
              >
                Get in Touch
              </Typography>
            }
            sx={{
              position: "relative",
              "& .MuiSpeedDial-actions": {
                flexDirection: "row",
                position: "relative",
              },
            }}
            onClose={() => setOpenDial(false)}
            onOpen={() => setOpenDial(true)}
            open={openDial}
            direction="down"
            FabProps={{
              variant: "extended",
              size: "medium",
            }}
          >
            {contactData.socialLinks.map((data) => (
              <SpeedDialAction
                key={data.label}
                icon={data.icon}
                onClick={() => handleActionClick(data.href)}
              />
            ))}
          </SpeedDial>
        </Box>
      </Box>

      <Dialog
        open={openModal}
        onClose={() => setOpenModal(false)}
        fullScreen
        sx={{
          "& .MuiDialog-paper": {
            backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background
            backdropFilter: "blur(5px)",
            borderRadius: 0,
            width: "100%",
            color: "white",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
          },
        }}
      >
        <Typography textAlign="center" sx={{ fontSize: "5em" }}>
          Call us at
        </Typography>
        <Typography sx={{ fontSize: "10em" }} textAlign="center">
          {phoneNumber.replace("tel:", "")}
        </Typography>
        <DialogActions sx={{ justifyContent: "center" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "50px",
              height: "50px",
              borderRadius: "50%",
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              cursor: "pointer",
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.2)",
              },
            }}
          >
            <IconButton
              onClick={() => setOpenModal(false)}
              aria-label="close"
              sx={{ padding: 0 }}
            >
              <CloseIcon sx={{ color: "white" }} />
            </IconButton>
          </Box>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default HeroCarousel;
