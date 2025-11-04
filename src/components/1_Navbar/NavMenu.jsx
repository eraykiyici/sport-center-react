import React from 'react';

const NavMenu = () => {
  return (
    <ul className="navbar-nav d-flex gap-3" id="nav-menu">
      <li className="nav-item">
        <a className="nav-link" href="#home">Home</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#classes">Classes</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#trainers">Trainer</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#review">Review</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#contact">Contact</a>
      </li>
      <li className="nav-item">
        <button className="nav-link" href="#">JOIN US</button>
      </li>
    </ul>
  );
};

export default NavMenu;