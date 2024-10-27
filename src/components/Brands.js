import React, { useMemo } from "react";
import Grid from "@mui/material/Grid2";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "react-spring";
import assets from "../assets/images";
import colors from "../assets/colors";

const Logo = React.memo(({ logo, index }) => (
  <Grid
    item
    sx={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <Box
      component="img"
      src={logo}
      alt={`Brand logo ${index + 1}`}
      sx={{
        width: { xs: "110px", md: "180px" },
        height: "auto",
        filter: "grayscale(100%) brightness(20)",
        objectFit: "contain",
        margin: "0 auto",
        padding: "20px",
      }}
    />
  </Grid>
));

const Brands = () => {
  const brandLogos = useMemo(
    () => [
      assets.images.AmericanDynamicsLogo,
      assets.images.AxisLogo,
      assets.images.BoschLogo,
      assets.images.Control4Logo,
      assets.images.DahuaLogo,
      assets.images.DSCLogo,
      assets.images.ElanLogo,
      assets.images.HikvisionLogo,
      assets.images.HoneywellLogo,
      assets.images.KantechLogo,
      assets.images.SamsungLogo,
    ],
    []
  );

  const { ref, inView } = useInView({
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
        backgroundColor: colors.secondary,
      }}
    >
      <animated.div style={smoothAnimation} ref={ref}>
        <Typography
          variant="h2"
          component="h2"
          align="left"
          gutterBottom
          sx={{
            fontWeight: 500,
            mb: { xs: 6, sm: 8, md: 10 },
            mt: { xs: 6, sm: 8, md: 10 },
            fontSize: {
              xs: "1.8em",
              sm: "2.5em",
              md: "3.2em",
              lg: "4em",
            },
            color: "white",
            lineHeight: "1.1em",
          }}
        >
          Brands We Work With
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          {brandLogos.map((logo, index) => (
            <Logo key={index} logo={logo} index={index} />
          ))}
        </Grid>
      </animated.div>
    </Box>
  );
};

export default Brands;
