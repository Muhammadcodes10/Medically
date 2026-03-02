import { useState } from "react";
function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all required fields.");
      return;
    }

    console.log("Form Submitted:", formData);

    setSubmitted(true);

    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="contactDiv">
      <div className="contactHeader">
        <h2>Get in touch</h2>
        <p>Medico was founded with you in mind. Let's make it work better!</p>
      </div>

      <form className="contactForm" onSubmit={handleSubmit}>
        <div className="formGroup">
          <label>Name *</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your full name"
          />
        </div>

        <div className="formGroup">
          <label>Email *</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="your@email.com"
          />
        </div>

        <div className="formGroup">
          <label>Subject</label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="What is this about?"
          />
        </div>

        <div className="formGroup">
          <label>Message *</label>
          <textarea
            name="message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            placeholder="Write your message here..."
          />
        </div>

        <button type="submit" className="submitBtn">
          Send Message
        </button>

        {submitted && (
          <p className="successMessage">
            ✅ Thank you! We'll get back to you soon.
          </p>
        )}
      </form>
    </div>
  );
}

export default Contact;