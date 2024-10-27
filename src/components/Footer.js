import * as React from "react";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import assets from "../assets/images";
import contactData from "../assets/data/contactData";

function Copyright() {
  return (
    <Typography variant="body2" sx={{ color: "text.secondary", mt: 1 }}>
      {"Copyright © "}
      <Link color="text.secondary" href="https://mui.com/">
        {contactData.company}
      </Link>
      &nbsp;{new Date().getFullYear()}
    </Typography>
  );
}

export default function Footer() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: { xs: 4, sm: 8 },
        py: { xs: 4, sm: 10 },
        paddingInline: { xs: 2, md: 8 },
        textAlign: { sm: "center", md: "right" },
      }}
      role="contentinfo"
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          width: "100%",
          gap: 4,
        }}
      >
        <Box
          sx={{
            flex: "1 1 auto",
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: "center",
            gap: 2,
          }}
        >
          <Box
            component="img"
            src={assets.images.logo}
            alt="Coloursnet logo"
            sx={{
              width: { xs: 80, md: 120, lg: 160 },
              height: { xs: 80, md: 120, lg: 160 },
              marginRight: { md: 1 },
            }}
            loading="lazy"
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              textAlign: { xs: "center", md: "left" },
            }}
          >
            <Typography
              variant="h6"
              sx={{
                letterSpacing: "0.1em",
                fontFamily: "'Bruno Ace SC', sans-serif",
              }}
            >
              {contactData.company}
            </Typography>
            <Typography variant="body1">{contactData.catchphrase}</Typography>
            <Typography variant="body1">
              Address: {contactData.address}
            </Typography>
            <Link
              href={`tel:${contactData.phone.replace(/\D/g, "")}`}
              aria-label={`Call ${contactData.phone}`}
            >
              <Typography variant="body2" gutterBottom sx={{ color: "white" }}>
                {contactData.phone}
              </Typography>
            </Link>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 2,
          }}
        >
          <Box
            component="img"
            src={assets.images.flag}
            alt="Canadian Flag"
            sx={{
              width: { xs: 80, md: 120 },
              height: { xs: 80, md: 120 },
              mr: { md: 4 },
            }}
          />
          <Box
            sx={{
              display: "flex",
              gap: 2,
              justifyContent: "center",
            }}
          >
            {contactData.socialLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                sx={{
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.2)",
                  },
                }}
              >
                {link.icon}
              </Link>
            ))}
          </Box>
        </Box>
      </Box>

      <Copyright />
    </Box>
  );
}
