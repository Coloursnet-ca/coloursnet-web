import * as React from "react";
import { useSpring, animated } from "react-spring";
import Grid from "@mui/material/Grid2";
import Box from "@mui/material/Box";
import { Typography, useMediaQuery } from "@mui/material";
import assets from "../assets/images";
import { useInView } from "react-intersection-observer";
import colors from "../assets/colors";

const ServiceItem = React.memo(({ service, isSelected, onClick }) => {
  const isSmallScreen = useMediaQuery("(max-width: 959px)");
  const imageAnimation = useSpring({
    opacity: isSelected ? 1 : 0,
    transform: isSelected ? "scale(1)" : "scale(0.8)",
    config: {
      tension: 250,
      friction: 20,
      duration: 500,
    },
  });

  return (
    <Box
      onClick={onClick}
      sx={{
        cursor: "pointer",
        borderBottom: `1px solid ${colors.divider}`,
        "&:last-child": {
          borderBottom: "none",
        },
        backgroundColor: isSelected ? "action.selected" : "transparent",
        transition:
          "background-color 0.3s ease-in-out, transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
        paddingInline: { xs: 2, sm: 4, md: 6 },
        paddingBlock: { xs: 2, sm: 3, md: 4 },
      }}
    >
      <Typography
        variant="h6"
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
        {service.name}
      </Typography>
      <Box
        sx={{
          maxHeight: isSelected ? "auto" : 0,
          overflow: "hidden",
          transition: "max-height 0.8s ease, padding 0.5s ease",
          paddingTop: isSelected ? 1 : 0,
        }}
      >
        <Typography
          variant="body1"
          sx={{
            mb: { xs: 1, sm: 2, md: 3 },
            fontSize: { xs: "0.85em", md: "1em" },
            fontWeight: 400,
            letterSpacing: "-0.02em",
            textAlign: "justify",
            textJustify: "inter-word",
          }}
        >
          {service.description}
        </Typography>
      </Box>
      {isSelected && isSmallScreen && (
        <animated.div style={imageAnimation}>
          <Box
            sx={{
              borderRadius: { xs: "20px", sm: "30px", md: "50px" },
              overflow: "hidden",
              boxSizing: "border-box",
              width: "100%",
              aspectRatio: 1 / 1,
              display: "flex",
              mb: 2,
              padding: 3,
              height: "auto",
            }}
          >
            <img
              src={service.image}
              alt={service.name}
              style={{
                aspectRatio: "1/1",
                width: "100%",
                height: "auto",
                objectFit: "cover",
                borderRadius: "inherit",
              }}
              loading="lazy"
            />
          </Box>
        </animated.div>
      )}
    </Box>
  );
});

export default function Services() {
  const services = [
    {
      id: "1",
      name: "CCTV Installation",
      description:
        "Expert installation of high-quality CCTV systems from leading brands like Hikvision and Dahua. Our professionals ensure optimal placement and configuration for maximum coverage and security, tailored to your specific needs.",
      image: assets.images.installation,
    },
    {
      id: "2",
      name: "Servicing and Maintenance",
      description:
        "Regular servicing and maintenance of CCTV systems to keep your security operational. We provide thorough inspections, cleaning, and updates to ensure your cameras from brands like Axis and Bosch are always performing at their best.",
      image: assets.images.maintainence,
    },
    {
      id: "3",
      name: "Home Automation",
      description:
        "Seamlessly integrate smart devices for a cohesive home automation experience. Our solutions include smart cameras, lighting, and climate control systems, enabling you to manage your home efficiently and securely from anywhere.",
      image: assets.images.automation,
    },
    {
      id: "4",
      name: "Networking and Ethernet",
      description:
        "Setup and maintenance of reliable networking solutions, including high-speed Ethernet installation and configuration for your CCTV systems.",
      image: assets.images.network,
    },
    {
      id: "5",
      name: "Alarm Systems",
      description:
        "Comprehensive alarm systems featuring state-of-the-art technology from top brands such as Honeywell and ADT. Our systems are designed to provide enhanced security, ensuring peace of mind for your home or business.",
      image: assets.images.alarmSystem,
    },
    {
      id: "6",
      name: "Software Solutions",
      description:
        "Custom software solutions including web development, app development, and backend development tailored to meet your business needs. Our experienced team leverages the latest technologies to create robust applications that enhance your operational efficiency and user experience.",
      image: assets.images.softwareSolutions,
    },
  ];

  const [selectedService, setSelectedService] = React.useState(services[0]);
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
      tension: 250,
      friction: 10,
      duration: 800,
    },
  });

  return (
    <animated.div style={smoothAnimation} ref={ref}>
      <Box
        sx={{
          paddingInline: { xs: 2, sm: 4, md: 10, lg: 16 },
          marginTop: 2,
          marginBottom: { xs: 4, md: 8 },
        }}
      >
        <Typography
          variant="h2"
          component="h2"
          align="left"
          gutterBottom
          sx={{
            mb: { xs: 4, sm: 5, md: 6 },
            mt: { xs: 4, sm: 5, md: 6 },
            fontSize: {
              xs: "1.5em",
              sm: "2em",
              md: "2.5em",
              lg: "3em",
            },
            lineHeight: "1.1em",
          }}
        >
          Our Services
        </Typography>
        <Grid
          container
          sx={{
            border: `1px solid ${colors.divider}`,
            borderRadius: { xs: "20px", sm: "30px", md: "50px", lg: "70px" },
            overflow: "hidden",
          }}
        >
          <Grid
            size={{ xs: 12, md: 6 }}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              boxSizing: "border-box",
              overflow: "hidden",
            }}
          >
            <Box sx={{ flex: 1, boxSizing: "border-box" }}>
              {services.map((service) => (
                <ServiceItem
                  key={service.id}
                  service={service}
                  isSelected={selectedService.id === service.id}
                  onClick={() => setSelectedService(service)}
                />
              ))}
            </Box>
          </Grid>
          <Grid
            size={{ xs: 12, md: 6 }}
            sx={{
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
              alignItems: "center",
              padding: 4,
              borderLeft: `1px solid ${colors.divider}`,
            }}
          >
            <Box
              sx={{
                borderRadius: {
                  xs: "20px",
                  sm: "30px",
                  md: "50px",
                  lg: "70px",
                },
                overflow: "hidden",
                width: "90%",
                height: "auto",
              }}
            >
              <img
                src={selectedService.image}
                alt={selectedService.name}
                style={{
                  aspectRatio: "1/1",
                  width: "100%",
                  height: "auto",
                  objectFit: "cover",
                  borderRadius: "inherit",
                }}
                loading="lazy"
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </animated.div>
  );
}
