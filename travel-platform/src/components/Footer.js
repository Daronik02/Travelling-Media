import React from "react";
import "./Footer.css"; // Add styles if needed

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-social">
        <a href="#"><i className="fab fa-facebook"></i></a>
        <a href="#"><i className="fab fa-instagram"></i></a>
        <a href="#"><i className="fab fa-twitter"></i></a>
      </div>
      <div className="footer-contact">
        <p>Email: support@travelmedia.com</p>
        <p>Phone: +91 98765 43210</p>
      </div>
      <p className="footer-bottom">© 2025 Travelling Media. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
