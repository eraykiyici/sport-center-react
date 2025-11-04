import React, { useState, useEffect } from 'react';
import NavLogo from './NavLogo';
import NavMenu from './NavMenu';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); 

  return (
    <nav className={`navbar navbar-expand-lg ${isScrolled ? "scrolled" : ""}`}>
      <div className="container-fluid">
        <NavLogo />
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse fw-bold fs-5" id="navbarNav">
          <NavMenu />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;