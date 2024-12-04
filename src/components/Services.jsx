import "./Services.css";

const services = [
  {
    title: "Plant Maintenance",
    description: "Regular watering, fertilizing, and care.",
  },
  {
    title: "Terrace Gardening",
    description: "Create and maintain lush terrace gardens.",
  },
  {
    title: "Interior Plant Design",
    description: "Stylish plant arrangements for any space.",
  },
  {
    title: "Corporate Decor",
    description: "Enhance business spaces with greenery.",
  },
];

const Services = () => {
  return (
    <section id="services" className="services">
      <h2>Our Services</h2>
      <div className="services-container">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
