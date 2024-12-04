import "./ConsultationForm.css";

const ConsultationForm = () => {
  return (
    <div className="form-overlay">
      <div className="form-container">
        <h2>Book a Consultation</h2>
        <form>
          <label>
            Full Name:
            <input type="text" placeholder="Enter your full name" required />
          </label>
          <label>
            Email Address:
            <input type="email" placeholder="Enter your email" required />
          </label>
          <label>
            Phone Number:
            <input type="tel" placeholder="Enter your phone number" required />
          </label>
          <label>
            Message:
            <textarea placeholder="Tell us about your needs"></textarea>
          </label>
          <div className="form-buttons">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ConsultationForm;
