import React from 'react';

const HeroButtons = () => {
  return (
    <div className="hero-buttons d-flex gap-5">
      <a href="#home" className="btn btn-first me-2 fw-bold text-white fs-4">Sign Up</a>
      <a href="#home" className="btn btn-second fw-bold fs-4">Details</a>
    </div>
  );
};

export default HeroButtons;