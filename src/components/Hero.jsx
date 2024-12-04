import "./Hero.css";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="hero">
      <h1>Transform Your Space with the Beauty of Nature</h1>
      <p>
        We bring life to your spaces with customized plant care and decoration
        services.
      </p>
      <Link to="/book-consultation">
        <button className="hero-button">Book a Consultation</button>
      </Link>
    </section>
  );
};

export default Hero;
