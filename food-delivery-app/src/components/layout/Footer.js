import React from "react";

const Footer = () => {
  return (
    <footer className="footer grey darken-4">
      <div className="container white-text">
        <div className="left">
          <h5>Copyright &copy; {new Date().getFullYear()}</h5>
        </div>

        <div className="right">
          <h6>Developed by Ayush</h6>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
