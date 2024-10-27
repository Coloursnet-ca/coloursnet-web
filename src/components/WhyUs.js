import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import PeopleIcon from "@mui/icons-material/People";
import DevicesIcon from "@mui/icons-material/Devices";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import SecurityIcon from "@mui/icons-material/Security";
import BuildIcon from "@mui/icons-material/Build";
import colors from "../assets/colors";
import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "react-spring";

const items = [
  {
    icon: <VerifiedUserIcon fontSize="large" />,
    title: "Trusted by Customers",
    description:
      "At ColoursNet, we prioritize your security by offering reliable and proven security systems. Our commitment to quality means we use only the top equipment from the market, ensuring that you can trust us to keep your premises safe.",
  },
  {
    icon: <PeopleIcon fontSize="large" />,
    title: "Expert Team",
    description:
      "Our team at ColoursNet consists of seasoned professionals with years of experience in security camera installation. We ensure that every technician is well-trained to provide you with the best service, making your security our priority.",
  },
  {
    icon: <DevicesIcon fontSize="large" />,
    title: "Latest Technology and Affordable Rates",
    description:
      "At ColoursNet, we leverage the latest technology to provide state-of-the-art security solutions without breaking the bank. Our competitive rates ensure that you receive top-notch services at the most reasonable prices.",
  },
  {
    icon: <SupportAgentIcon fontSize="large" />,
    title: "24/7 Customer Support",
    description:
      "ColoursNet prides itself on offering round-the-clock customer support. Our dedicated professionals are always available to ensure that your security needs are met promptly and effectively, so you can have peace of mind at all times.",
  },
  {
    icon: <SecurityIcon fontSize="large" />,
    title: "CCTV Installation Services",
    description:
      "We provide professional CCTV installation services tailored to your unique security needs. At ColoursNet, we focus on delivering high-quality installations that enhance your security setup, ensuring you are always protected.",
  },
  {
    icon: <BuildIcon fontSize="large" />,
    title: "CCTV Upgrade and Maintenance",
    description:
      "Upgrade your existing CCTV systems with ColoursNet to ensure optimal performance. Our maintenance services are designed to keep your security systems running smoothly, allowing you to focus on what matters most.",
  },
];

const Item = React.memo(({ icon, title, description }) => (
  <Stack
    direction="column"
    spacing={1}
    useFlexGap
    sx={{
      color: "inherit",
      p: 3,
      border: {
        xs: "none",
        md: `1px solid ${colors.divider}`,
      },
      borderRadius: {
        xs: "20px",
        aspectRatio: { xs: "none", md: 16 / 9 },
        md: "30px",
      },
      height: "100%",
    }}
  >
    <Box sx={{ opacity: "100%" }}>{icon}</Box>
    <div>
      <Typography
        gutterBottom
        sx={{
          fontWeight: 500,
          mb: { xs: 0.5, sm: 1, md: 2 },
          fontSize: {
            xs: "1.1em",
            sm: "1.26em",
            md: "1.5em",
            lg: "1.8em",
          },
          lineHeight: "1em",
          textAlign: "left",
        }}
      >
        {title}
      </Typography>
      <Typography
        variant="body2"
        sx={{
          mb: { xs: 1, sm: 2, md: 3 },
          fontSize: { xs: "0.85em", md: "1em" },
          fontWeight: 400,
          letterSpacing: "-0.02em",
          textAlign: "justify",
          textJustify: "inter-word",
        }}
      >
        {description}
      </Typography>
    </div>
  </Stack>
));

const WhyUs = React.memo(() => {
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
        width: "100%",
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        paddingInline: { xs: 2, sm: 4, md: 10, lg: 16 },
        textAlign: "start",
        background: colors.primary,
      }}
    >
      <animated.div style={smoothAnimation} ref={ref}>
        <Typography
          component="h2"
          variant="h4"
          gutterBottom
          sx={{
            fontSize: {
              xs: "1.8em",
              sm: "2.5em",
              md: "3.2em",
              lg: "4em",
            },
          }}
        >
          Why Us
        </Typography>

        <Grid container spacing={2} sx={{ mt: { xs: 2, md: 6 } }}>
          {items.map((item, index) => (
            <Grid
              size={{
                xs: 12,
                sm: 6,
                md: 4,
              }}
              key={index}
            >
              <Item
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            </Grid>
          ))}
        </Grid>
      </animated.div>
    </Box>
  );
});

export default WhyUs;
