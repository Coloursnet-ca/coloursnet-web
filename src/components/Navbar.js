import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import colors from "../assets/colors";
import assets from "../assets/images";

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  height: "100%",
  backdropFilter: "blur(24px)",
  backgroundColor: colors.primary,
  paddingBlock: "8px",
  paddingInline: theme.spacing(1),
  [theme.breakpoints.up("md")]: {
    paddingInline: theme.spacing(3),
  },
}));

const Navbar = ({ aboutUsClicked }) => {
  return (
    <AppBar
      position="static"
      sx={{
        boxShadow: 0,
        bgcolor: "black",
        backgroundImage: "transparent",
        height: "var(--siteheader-height)",
      }}
    >
      <StyledToolbar variant="dense" disableGutters>
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box
              component="img"
              src={assets.images.logo}
              alt="Coloursnet logo"
              sx={{
                width: { xs: 60, md: 80 },
                height: { xs: 60, md: 80 },
                marginRight: { md: 1 },
              }}
              loading="lazy"
            />
            <Box textAlign="left">
              <Typography
                variant="h4"
                sx={{
                  fontSize: { xs: "0.8rem", md: "1.4rem" },
                  letterSpacing: "0.1em",
                  fontFamily: "'Bruno Ace SC', sans-serif",
                }}
                component="h1"
              >
                COLOURSNET
              </Typography>
              <Typography
                variant="caption"
                sx={{
                  fontFamily: "'Roboto', sans-serif",
                  color: "white",
                  letterSpacing: { xs: 0, md: "0.2em" },
                }}
                component="h2"
              >
                Security Solutions
              </Typography>
            </Box>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box
              component="img"
              src={assets.images.flag}
              alt="Canadian Flag, representing Coloursnet's security solutions in Canada"
              sx={{
                width: { xs: 30, md: 40 },
                height: { xs: 30, md: 40 },
                marginRight: 4,
              }}
              loading="lazy"
            />
            <Button
              color="primary"
              variant="outlined"
              size="small"
              onClick={aboutUsClicked}
              sx={{
                padding: "8px 16px",
                fontSize: "1rem",
                textTransform: "none",
                display: { xs: "none", md: "flex" },
                lineHeight: "1",
                backgroundColor: colors.primary,
                color: "#fff",
                borderWidth: 2,
                borderColor: colors.divider,
                borderRadius: "12px",
                transition: "transform 0.2s ease",
                "&:hover": {
                  backgroundColor: colors.primary,
                  transform: "scale(1.05)",
                },
              }}
              aria-label="Contact Coloursnet for more information about our security solutions in Canada"
            >
              About us
            </Button>
          </Box>
        </Box>
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;
