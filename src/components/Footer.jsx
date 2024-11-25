import React from "react";
import "./Footer.css"; // Import the CSS for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <p>&copy; 2024 Swiss Clothing. All Rights Reserved.</p>
        </div>
        <div className="footer-center">
          <ul>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/contact">Contact Us</a>
            </li>
           
           </ul>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
