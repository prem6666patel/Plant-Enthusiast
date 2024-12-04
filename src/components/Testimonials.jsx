import "./Testimonials.css";

const testimonials = [
  {
    name: "Mukesh Ambani",
    feedback: "Our office looks amazing with their plant decor!",
  },
  {
    name: "V.G. Siddhartha",
    feedback: "Great service! My cafe has  looked greener.",
  },
  {
    name: "Gautam Adani",
    feedback: "Our office looks amazing with their plant decor!",
  },
  {
    name: "Gerald Baldwin",
    feedback: "Great service! My cafe has looked greener.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials">
      <h2>What Our Clients Say</h2>
      <div className="testimonials-container">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <p>{testimonial.feedback}</p>
            <h4>- {testimonial.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
