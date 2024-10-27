import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import { Box, SpeedDial, SpeedDialAction } from "@mui/material";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Brands from "../components/Brands";
import WhyUs from "../components/WhyUs";
import Services from "../components/Services";
import FAQ from "../components/FAQ";
import ConnectWithus from "../components/ConnectWithus";
import Footer from "../components/Footer";
import AppTheme from "../shared-theme/AppTheme";
import Pricing from "../components/Pricing";
import AboutUs from "../components/AboutUS";
import contactData from "../assets/data/contactData";
import colors from "../assets/colors";
import CallIcon from "@mui/icons-material/Call";

export default function Home(props) {
  const aboutUsRef = React.useRef(null);
  const connectWithUsRef = React.useRef(null);
  const [open, setOpen] = React.useState(false);
  const [showSpeedDial, setShowSpeedDial] = React.useState(true);

  const handleScrollToAboutUs = () => {
    if (aboutUsRef.current) {
      aboutUsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowSpeedDial(!entry.isIntersecting);
      },
      {
        threshold: 0.1,
      }
    );

    const currentConnectWithUsRef = connectWithUsRef.current;

    if (currentConnectWithUsRef) {
      observer.observe(currentConnectWithUsRef);
    }

    return () => {
      if (currentConnectWithUsRef) {
        observer.unobserve(currentConnectWithUsRef);
      }
    };
  }, []);

  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />
      <Navbar aboutUsClicked={handleScrollToAboutUs} />
      <Hero />
      <div>
        <Services />
        <WhyUs />
        <Brands />
        <Divider />
        <Pricing />
        <FAQ />
        <AboutUs ref={aboutUsRef} />
        <div ref={connectWithUsRef}>
          <ConnectWithus />
          <Footer />
        </div>
      </div>
      {showSpeedDial && (
        <Box
          sx={{
            position: "fixed",
            bottom: 50,
            right: 16,
            display: { xs: "flex", md: "none" },
          }}
        >
          <SpeedDial
            ariaLabel="Contact Options"
            icon={<CallIcon sx={{ color: "white" }} />}
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
          >
            {contactData.socialLinks.map((action) => (
              <SpeedDialAction
                key={action.label}
                icon={action.icon}
                tooltipTitle={action.label}
                onClick={() => {
                  try {
                    window.open(action.href, "_blank");
                  } catch (error) {
                    console.error("Failed to open URL");
                  }
                }}
                sx={{
                  backgroundColor: colors.primary,
                  color: "white",
                }}
              />
            ))}
          </SpeedDial>
        </Box>
      )}
    </AppTheme>
  );
}
