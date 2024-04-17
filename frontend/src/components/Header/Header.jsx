import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import "./Header.css"
function Header() {
  return (
    <header>
        {/* <input type="checkbox" id="toggler" /> 
      <label htmlFor="toggler" className="fas fa-bars">
        <FontAwesomeIcon icon={faBars} /> 
      </label> */}
      <a href="#" className="logo">HomeHarbor<span>.</span></a>
      <nav className="navbar">
        <a href="#home">home</a>
        <a href="#about">about</a>
        <a href="#products">products</a>
        <a href="#review">review</a>
        <a href="#contact">contact</a>
      </nav>
      <div className="icons">
      <FontAwesomeIcon icon={faHeart} className="icon" />
        <FontAwesomeIcon icon={faShoppingCart} className="icon" />
        <FontAwesomeIcon icon={faUser} className="icon" />
      </div>
    </header>
  );
}

export default Header;
