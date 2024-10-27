import * as React from "react";
import Grid from "@mui/material/Grid2";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import MailIcon from "@mui/icons-material/Mail";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import colors from "../assets/colors";
import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "react-spring";
import { Box, useMediaQuery } from "@mui/material";
import contactData from "../assets/data/contactData";

export default function ConnectWithUs() {
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  const resetForm = () => {
    setEmail("");
    setMessage("");
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    const subject = encodeURIComponent("Subject Here");
    const body = encodeURIComponent(message);
    const mailtoLink = `mailto:${email}?subject=${subject}&body=${body}`;

    window.location.href = mailtoLink;

    resetForm();
  };

  const handleWhatsappSubmit = () => {
    const whatsappMessage = message || "Hi, I would like to connect with you.";
    const whatsappUrl = `${
      contactData.socialLinks[2].href
    }?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, "_blank");
    resetForm();
  };

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const smoothAnimation = useSpring({
    from: { opacity: 0 },
    to: inView ? { opacity: 1 } : { opacity: 0 },
    config: { duration: 800 },
    delay: 400,
  });

  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("md"));
  const handleSubmit = isSmallScreen ? handleWhatsappSubmit : handleEmailSubmit;

  const textFieldStyles = {
    backgroundColor: "#ffffff",
    "& .MuiOutlinedInput-root": {
      borderRadius: "8px",
      "& fieldset": { border: "2px solid #ffffff" },
      "&:hover fieldset": { border: "2px solid #ffffff" },
      "&.Mui-focused fieldset": { border: "2px solid #ffffff" },
    },
    "& input, & textarea": { color: "black" },
    "& .MuiInputLabel-root": { color: colors.primaryFont, opacity: 0.7 },
    "& .MuiInputLabel-root.Mui-focused": { color: colors.primaryFont },
  };

  return (
    <Box sx={{ background: colors.secondary }}>
      <animated.div style={smoothAnimation} ref={ref}>
        <Grid
          container
          sx={{
            display: "flex",
            alignItems: "center",
            width: "100%",
            paddingBlock: { xs: 2, md: 4 },
            paddingInline: { xs: 2, sm: 4, md: 10, lg: 16 },
          }}
        >
          <Grid size={{ xs: 12, md: 5 }} sx={{ display: "flex" }}>
            <Typography
              variant="body2"
              sx={{
                fontWeight: 600,
                mt: 2,
                fontSize: { xs: "1.5em", sm: "2em", md: "2.5em", lg: "3em" },
                lineHeight: "1.1em",
              }}
            >
              Connect with us
            </Typography>
          </Grid>

          <Grid
            item
            size={{ xs: 12, md: 7 }}
            sx={{ paddingInline: { xs: 2, md: 8, lg: 18 } }}
          >
            <Grid container spacing={2} sx={{ marginTop: 2 }}>
              <Grid size={12} sx={{ display: { xs: "none", md: "block" } }}>
                <TextField
                  fullWidth
                  label="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  variant="filled"
                  sx={textFieldStyles}
                />
              </Grid>

              <Grid size={12}>
                <TextField
                  fullWidth
                  label="Enter your message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  variant="filled"
                  multiline
                  minRows={3}
                  sx={textFieldStyles}
                />
              </Grid>

              <Grid size={12} display="flex" justifyContent="start">
                <Button
                  variant="contained"
                  onClick={handleSubmit}
                  sx={{
                    padding: "4px 8px",
                    fontSize: "1rem",
                    textTransform: "none",
                    background: colors.primary,
                    color: "#fff",
                    borderRadius: "12px",
                    transition:
                      "background-color 0.3s ease, transform 0.2s ease",
                    "&:hover": { backgroundColor: colors.primary },
                  }}
                >
                  {isSmallScreen ? (
                    <>
                      <WhatsAppIcon sx={{ marginRight: 1 }} /> Send via WhatsApp
                    </>
                  ) : (
                    <>
                      <MailIcon sx={{ marginRight: 1 }} /> Send Email
                    </>
                  )}
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </animated.div>
    </Box>
  );
}
