import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__inner">
        <Link to="/" className="navbar__logo__container">
          <span className="navbar__logo__name">Smooth</span>
          <i className="fas fa-carrot navbar__logo" />
        </Link>
        <ul className="navbar__menu">
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <Link to="/recipes">Recipes</Link>
          </li>
          <li>
            <Link to="/news">News</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
