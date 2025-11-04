import React from 'react';

const FooterLinks = ({ title, links }) => {
  return (
    <div className="col-md-6">
      <h2>{title}</h2>
      <ul className="list-unstyled">
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.href} className="footer-links">{link.text}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLinks;