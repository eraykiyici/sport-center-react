import React from "react";
import SectionHeader from "../common/SectionHeader";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";
import ContactMap from "./ContactMap";

const ContactSection = () => {
  const subtitle = (
    <>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, optio!
      Doloremque, quia libero dicta magnam, <br /> dolor sit amet.
    </>
  );

  return (
    <div className="container p-5" id="contact">
      <SectionHeader
        title="CONTACT US"
        subtitle={subtitle}
        subtitleClass="contact-text"
      />

      <div className="row mt-4">
        <div className="col-lg-6 mb-4">
          <ContactInfo />
          <ContactForm />
        </div>

        <ContactMap />
      </div>
    </div>
  );
};

export default ContactSection;
