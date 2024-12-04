import "./Footer.css";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footpanel">
        <FaInstagram></FaInstagram>
        <FaFacebook></FaFacebook>
        <FaTwitter></FaTwitter>
        <FaLinkedin></FaLinkedin>
      </div>

      <br />
      <br />

      <p>&copy; 2024 Plantify. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
