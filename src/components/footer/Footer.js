import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-info">
        <h1>Dj45-Sys</h1>
      </div>
      <div className="footer-contact">
        <h3>Contact me</h3>
        <p>And let's get down to work</p>
      </div>
      <div className="footer-sns">
        <div className="design-by">Design By Dj45-SYs</div>
        <div className="sns-links">
          <a href="https://github.com/dj45-sys" target="_blank" rel="noreferrer">
            <i className="fab fa-github github"></i>
          </a>
          <a href="https://twitter.com/DJSys4" target="_blank" rel="noreferrer">
            <i className="fab fa-twitter twitter"></i>
          </a>
          <a href="https://discord.gg/RXyMNgH9n7" target="_blank" rel="noreferrer">
            <i className="fab fa-discord discord"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;