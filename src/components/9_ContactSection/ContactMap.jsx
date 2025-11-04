import React from "react";

const ContactMap = () => {
  return (
    <div className="col-lg-6">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2114.425651842103!2d-70.56197044606937!3d41.45550506672132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e5290fa03effff%3A0x26b61c976e48cdca!2sMVCMA%20Tabernacle!5e0!3m2!1str!2str!4v1756325091060!5m2!1str!2str"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map"
      ></iframe>
    </div>
  );
};

export default ContactMap;
