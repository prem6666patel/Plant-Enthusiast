import { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="./public/plant_logo2.png" alt="" />
        <pre> </pre>
        Plant Enthusiast
      </div>

      {/* Mobile toggle button */}
      <button className="navbar-toggle" onClick={toggleMenu}>
        ☰
      </button>
      {/* Navbar links */}
      <ul className={`navbar-links ${menuOpen ? "active" : ""}`}>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/Services">Services</Link>
        </li>
        <li>
          <Link to="/gallery">gallery</Link>
        </li>
        <li>
          <Link to="/result">Result</Link>
        </li>
        <li>
          <Link to="/contact">Contact us</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
