import React, { forwardRef } from "react";
import { Box, Typography } from "@mui/material";
import colors from "../assets/colors";
import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "react-spring";

const AboutUs = forwardRef((props, ref) => {
  const { ref: inViewRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const smoothAnimation = useSpring({
    from: { opacity: 0, transform: "translateY(50px)" },
    to: inView
      ? { opacity: 1, transform: "translateY(0)" }
      : { opacity: 0, transform: "translateY(50px)" },
    config: {
      type: "spring",
      tension: 250,
      friction: 10,
      duration: 800,
      mass: 1,
      restSpeed: 0.001,
      restDelta: 0.001,
    },
  });

  return (
    <Box
      sx={{
        paddingBlock: { xs: 2, sm: 3, md: 4 },
        paddingInline: { xs: 2, sm: 4, md: 10, lg: 16 },
        background: `linear-gradient(to bottom, ${colors.primary}, ${colors.secondary})`,
        textAlign: "left",
      }}
      ref={ref}
    >
      <animated.div style={smoothAnimation} ref={inViewRef}>
        <Typography
          variant="h2"
          component="h2"
          align="left"
          gutterBottom
          sx={{
            mt: { xs: 6, sm: 8, md: 10 },
            fontSize: {
              xs: "1.8em",
              sm: "2.5em",
              md: "3em",
              lg: "3.5em",
            },
            lineHeight: "1.1em",
          }}
        >
          About Coloursnet
        </Typography>

        <Typography variant="h5" sx={{ mb: 2 }}>
          Your Trusted Partner in Security and Automation
        </Typography>

        <Typography
          gutterBottom
          sx={{
            textAlign: "justify",
            fontSize: { xs: "0.85em", md: "1.2em" },
          }}
        >
          At{" "}
          <strong
            style={{
              background:
                "linear-gradient(to right, #FF0000, #FF7F00, #FFFF00, #00FF00)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Coloursnet
          </strong>
          , based in Toronto, Canada, we deliver reliable security solutions
          designed for your peace of mind. Our expertise in CCTV installation
          ensures that your home and business are protected around the clock. We
          specialize in smart home automation and robust alarm systems that
          offer round-the-clock monitoring. Our commitment is to keep you safe
          and connected, allowing you to live and work worry-free. Trust{" "}
          <strong>Coloursnet</strong> for exceptional service and personalized
          support tailored to your specific needs. We're here to secure your
          world and enhance your lifestyle with cutting-edge technology.
        </Typography>
      </animated.div>
    </Box>
  );
});

export default AboutUs;
