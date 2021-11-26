import React from "react";
import "./Footer.css";
function Footer() {
  var date = new Date();
  return (
    <div className="footer mb-0 text-light mt-5">
      <div className="container">
        <h4>this is my demo movies app</h4>
        <h6>{date.toDateString()}</h6>
      </div>
    </div>
  );
}

export default Footer;
