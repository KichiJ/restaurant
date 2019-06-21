import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__icons">
        <a
          href="https://www.twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-twitter" />
        </a>
        <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-facebook-f" />
        </a>
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-instagram" />
        </a>
        <a
          href="https://www.pinterest.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-pinterest-p" />
        </a>
      </div>
      <div className="footer__address">
        <span>Smooth GmbH</span>
        <span>Wesendorfer Str. 8</span>
        <span>13439 Berlin</span>
      </div>
      <div className="footer__others">
        <Link to="terms-and-conditions">Terms and Conditions</Link>
        <Link to="privacy-policy">Privacy Policy</Link>
      </div>
    </div>
  );
}

export default Footer;
