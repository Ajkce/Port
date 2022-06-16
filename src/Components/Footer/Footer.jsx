import React from "react";
import "./Footer.scss";
import png from "./png.png";

function Footer() {
  return (
    <footer className="footer noise">

      <div className="wrapper">
     
        <div className="row justify-content-between ">
          <p className="copyright-text">
            Created By <span>Ajaya</span> | &copy; 2021 All rights reserved
          </p>
          <p className="Footer__message">
            <strong className="Footer__bold">&lt;/&gt;</strong> with{" "}
            <span className="Footer__bold">🧡</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
