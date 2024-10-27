import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Chip from "@mui/material/Chip";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "react-spring";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import { useTheme } from "@mui/material";
import colors from "../assets/colors";

const tiers = [
  {
    title: "Basic Package",
    price: "1400",
    description: [
      "4 camera included",
      "Indoor & outdoor installation",
      "1 year warranty",
      "with installation and cameras",
    ],
    buttonText: "Book an Inquiry",
    buttonColor: colors.primary,
  },
  {
    title: "Standard Package",
    subheader: "Recommended",
    price: "2400",
    description: [
      "8 cameras included",
      "Indoor & outdoor installation",
      "1 years warranty",
      "with installation and cameras",
    ],
    buttonText: "Book an Inquiry",
    buttonColor: colors.highlight,
  },
  {
    title: "Premium Package",
    price: "2600",
    description: [
      "8 cameras included",
      "Indoor & outdoor installation",
      "Doorbell Camera",
      "1 years warranty",
      "with installation and cameras",
    ],
    buttonText: "Book an Inquiry",
    buttonColor: colors.primary,
  },
];

export default function Pricing() {
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
  const theme = useTheme();
  return (
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
        <Box
          sx={{
            width: { sm: "100%", md: "60%" },
            textAlign: { sm: "left", md: "left" },
          }}
        >
          <Typography
            component="h2"
            variant="h4"
            gutterBottom
            sx={{
              color: "text.primary",
              fontWeight: 600,
              mt: 2,
              textAlign: "left",
              fontSize: {
                xs: "1.5em",
                sm: "2em",
                md: "2.5em",
                lg: "3em",
              },
              lineHeight: "1.1em",
            }}
          >
            CCTV Fitting Packages
          </Typography>
          <Typography variant="body1" sx={{ color: "text.secondary" }}>
            Choose the right package for your CCTV fitting needs. Our packages
            are tailored to provide you with the best value and support.
          </Typography>
        </Box>
        <Grid
          container
          spacing={{ xs: 4, md: 8 }}
          sx={{
            width: "100%",
            mx: "auto",
            "& > *": {
              display: "flex",
              justifyContent: "center",
            },
          }}
        >
          {tiers.map((tier) => (
            <Grid size={{ xs: 12, md: 4 }} key={tier.title}>
              <Card
                sx={{
                  width: "100%",
                  height: "100%",
                  p: 2,
                  display: "flex",
                  flexDirection: "column",
                  gap: 4,
                  border: "none",
                  background:
                    "radial-gradient(circle at 50% 0%, hsl(220, 20%, 35%), hsl(220, 30%, 6%))",
                  boxShadow: `0 8px 12px hsla(220, 20%, 42%, 0.2)`,
                  ...(tier.title === "Standard Package" && {
                    [theme.breakpoints.up("md")]: {
                      transform: "scale(1.1)",
                      zIndex: 1,
                    },
                  }),
                }}
              >
                <CardContent
                  sx={{
                    flexGrow: 1,
                  }}
                >
                  <Box
                    sx={{
                      mb: 1,
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      gap: 2,
                      color: "grey.100",
                    }}
                  >
                    <Typography component="h3" variant="h6">
                      {tier.title}
                    </Typography>
                    {tier.title === "Standard Package" && (
                      <Chip icon={<AutoAwesomeIcon />} label={tier.subheader} />
                    )}
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "baseline",
                      color: "grey.50",
                    }}
                  >
                    <Typography component="h3" variant="h2">
                      CAD {tier.price}
                    </Typography>
                  </Box>
                  <Divider
                    sx={{ my: 2, opacity: 0.8, borderColor: "divider" }}
                  />
                  {tier.description.map((line) => (
                    <Box
                      key={line}
                      sx={{
                        py: 1,
                        display: "flex",
                        gap: 1.5,
                        alignItems: "center",
                      }}
                    >
                      <CheckCircleRoundedIcon
                        sx={{
                          width: 20,
                          color: "primary.light",
                        }}
                      />
                      <Typography
                        variant="subtitle2"
                        component="span"
                        sx={{ color: "grey.50" }}
                      >
                        {line}
                      </Typography>
                    </Box>
                  ))}
                </CardContent>
                <CardActions
                  sx={{
                    mt: "auto", // Pushes the button to the bottom
                  }}
                >
                  <Button
                    fullWidth
                    variant="contained"
                    sx={{ background: tier.buttonColor, textTransform: "none" }}
                  >
                    {tier.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </animated.div>
  );
}
