import React from "react";
import MobileHeader from "./MobileHeader";

import "../css/header.css";
// import tomanageLogo from "../Logo/tomanage-logo.png";
import tomanageLogo from "../Logo/tomanage-logo-1.png";

function Header() {
  return (
    <div id="header">
      <div className="header-left">
        <img className="tomanage-logo" src={tomanageLogo} alt="" />
      </div>
      <div className="header-right">
        <ul className="pc-nav nav">
          <li className="nav-link">
            <a href="#null">Home</a>
          </li>
          <li className="nav-link">
            <a href="#null">Products</a>
          </li>
          <li className="nav-link">
            <a href="#null">Contact</a>
          </li>
          <li className="nav-link">
            <button className="header-button" href="#null">
              Sign Up
            </button>
          </li>
        </ul>
        <div className="mobile-header">
          <MobileHeader />
        </div>
      </div>
    </div>
  );
}

export default Header;
