import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "react-spring";
import colors from "../assets/colors";

const FAQs = [
  {
    question: "How can I schedule a CCTV installation service?",
    answer:
      "To schedule a CCTV installation, please call us at [phone number] or fill out the contact form on our website. Our team will get back to you shortly to confirm your appointment.",
  },
  {
    question: "What are the costs associated with CCTV installation?",
    answer:
      "The cost of CCTV installation varies based on the number of cameras and the complexity of the setup. Please contact us for a detailed quote tailored to your specific requirements.",
  },
  {
    question: "Do you offer maintenance services for installed CCTV systems?",
    answer:
      "Yes, we provide comprehensive maintenance services to ensure your CCTV systems operate efficiently. Regular check-ups can be scheduled to keep your equipment in optimal condition.",
  },
  {
    question: "What warranty do you provide for your CCTV systems?",
    answer:
      "Our CCTV systems come with a [length of warranty] warranty that covers defects in materials and workmanship. For warranty claims, please contact our customer support.",
  },
  {
    question: "Can I monitor the CCTV feed remotely?",
    answer:
      "Yes, our CCTV systems are equipped with remote monitoring capabilities. You can access the feed from your smartphone or computer, giving you peace of mind wherever you are.",
  },
];

const FAQItem = React.memo(({ faq, index, expanded, handleChange }) => {
  return (
    <Accordion
      key={index}
      expanded={expanded === `panel${index + 1}`}
      onChange={handleChange(`panel${index + 1}`)}
      sx={{
        border: `1px solid ${colors.divider}`,
        "&:before": {
          display: "none",
        },
        backgroundColor: "inherit",
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon sx={{ color: colors.divider }} />}
        aria-controls={`panel${index + 1}d-content`}
        id={`panel${index + 1}d-header`}
        sx={{
          "&:hover": {
            backgroundColor: "transparent",
          },
        }}
      >
        <Typography component="h3" variant="subtitle1">
          {faq.question}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography
          variant="body2"
          gutterBottom
          sx={{
            maxWidth: { sm: "100%", md: "90%" },
            fontSize: { xs: "0.85em", md: "1.2em" },
          }}
        >
          {faq.answer}
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
});

export default function FAQ() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

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
        backgroundColor: "black",
      }}
    >
      <animated.div style={smoothAnimation} ref={ref}>
        <Typography
          component="h2"
          variant="h4"
          sx={{
            mb: 4,
            width: { sm: "100%", md: "60%" },
            textAlign: "start",
            fontSize: {
              xs: "1.5em",
              sm: "2em",
              md: "2.5em",
              lg: "3em",
            },
            lineHeight: "1.1em",
          }}
        >
          Frequently Asked Questions
        </Typography>
        <Box sx={{ width: "100%" }}>
          {FAQs.map((faq, index) => (
            <FAQItem
              key={index}
              faq={faq}
              index={index}
              expanded={expanded}
              handleChange={handleChange}
            />
          ))}
        </Box>
      </animated.div>
    </Box>
  );
}
