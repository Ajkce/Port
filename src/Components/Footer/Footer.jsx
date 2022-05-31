import React from "react";
import "./Footer.scss";
import png from "./png.png";

function Footer() {
  return (
    <footer class="footer noise">

      <div class="wrapper">
        <img src={png} alt="" />
        <div class="row justify-content-between ">
          <p class="copyright-text">
            Created By <span>Ajaya</span> | &copy; 2021 All rights reserved
          </p>
          <p class="Footer__message">
            <strong class="Footer__bold">&lt;/&gt;</strong> with{" "}
            <span class="Footer__bold">🧡</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
