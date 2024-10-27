import { Facebook, Instagram, MailOutline } from "@mui/icons-material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import MessengerIcon from "../../components/MessengerIcon";
import PhoneIcon from "@mui/icons-material/Phone";

const contactData = {
  company: "COLOURSNET",
  address: "59 Jacob Fisher Drive, Toronto, ON, Canada, M1B4K4",
  phone: "(+1) 6477723876",
  catchphrase: "Your Trusted Partner in CCTV Fitting and Home Automation",
  socialLinks: [
    {
      href: "https://facebook.com",
      label: "Visit our Facebook page",
      icon: <Facebook sx={{ height: 24, width: 24 }} />,
    },
    {
      href: "https://instagram.com",
      label: "Visit our Instagram profile",
      icon: <Instagram sx={{ height: 24, width: 24 }} />,
    },
    {
      href: "https://wa.me/+16477723876",
      label: "Chat with us on WhatsApp",
      icon: <WhatsAppIcon sx={{ height: 24, width: 24 }} />,
    },
    {
      href: "mailto:contact@coloursnet.ca",
      label: "Send us an email",
      icon: <MailOutline sx={{ height: 24, width: 24 }} />,
    },
    {
      href: "https://m.me/7012153109",
      label: "Chat with us on Messenger",
      icon: <MessengerIcon sx={{ height: 24, width: 24 }} />,
    },
    {
      href: "tel:+16477723876",
      label: "Call us",
      icon: <PhoneIcon sx={{ height: 24, width: 24 }} />,
    },
  ],
};

export default contactData;
