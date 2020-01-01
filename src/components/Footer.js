import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="footer" style={{ gridColumnStart: 2, gridColumnEnd: 3 }}>
        <footer>Copyright &copy; www.eraince.com</footer>
      </div>
    </div>
  );
};

export default Footer;
