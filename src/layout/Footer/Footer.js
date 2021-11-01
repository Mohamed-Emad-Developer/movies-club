import React from "react";
import "./Footer.css";
const date = new Date();
function Footer() {
  return (
    <div className="footer mb-0 text-light mt-5">
      <div className="container">
        <h4>this is my demo movies app</h4>
        <h6>{date.getFullYear}</h6>
      </div>
    </div>
  );
}

export default Footer;
