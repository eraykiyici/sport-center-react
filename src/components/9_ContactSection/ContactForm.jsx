import React from "react";

const ContactForm = () => {
  return (
    <div>
      <h3 className="contact-text fs-4 mb-3">Make An Appointment</h3>
      <form>
        <div className="mb-3">
          <input type="text" className="form-control" placeholder="Your Name" />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Your Email"
          />
        </div>
        <div className="mb-3">
          <textarea
            className="form-control"
            rows="4"
            placeholder="Your Message"
          ></textarea>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
