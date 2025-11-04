import React from "react";
import FooterInfo from "./FooterInfo";
import FooterLinks from "./FooterLinks";

const Footer = () => {
  const infoLinks = [
    { href: "#home", text: "About Us" },
    { href: "#classes", text: "Classes" },
    { href: "#review", text: "Blog" },
    { href: "#contact", text: "Contact" },
  ];

  const helpfulLinks = [
    { href: "#home", text: "Services" },
    { href: "#home", text: "Supports" },
    { href: "#home", text: "Terms & Condition" },
    { href: "#home", text: "Privacy Policy" },
  ];

  return (
    <footer className="footer">
      <div className="container text-white">
        <FooterInfo />

        <div className="row">
          <FooterLinks title="Information" links={infoLinks} />

          <FooterLinks title="Helpful Links" links={helpfulLinks} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
