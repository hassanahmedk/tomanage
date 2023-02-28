import React from "react";

import "../css/footer.css";
import tomanageLogo from "../Logo/tomanage-logo-1.png";
import blobSVG from "../Illustrations/blob.svg";

import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";

import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import OpenInBrowserIcon from "@mui/icons-material/OpenInBrowser";

import { blue, green, amber } from "@mui/material/colors";

function Footer() {
  return (
    <div id="footer">
      <img className="footer-decor-image" src={blobSVG} alt="" />
      <div className="footer-left">
        <img className="tomanage-logo-footer" src={tomanageLogo} alt="" />
        <div className="footer-contact">
          <span>by,</span>
          <div className="footer-contact-name">Hassan Ahmed Khan</div>
          <div className="footer-icons">
            <a href="#a">
              <Tooltip title="Phone">
                <IconButton>
                  <LocalPhoneIcon
                    className="footer-icon"
                    sx={{
                      fontSize: "2rem",
                      color: "rgba(10,10,10,0.8)",
                      "&:hover": { color: blue[700] },
                    }}
                  />
                </IconButton>
              </Tooltip>
            </a>
            <a href="#a">
              <Tooltip title="Email">
                <IconButton>
                  <EmailIcon
                    className="footer-icon"
                    sx={{
                      fontSize: "2rem",
                      color: "rgba(10,10,10,0.8)",
                      "&:hover": { color: green[700] },
                    }}
                  />
                </IconButton>
              </Tooltip>
            </a>
            <a href="#a">
              <Tooltip title="Website">
                <IconButton>
                  <OpenInBrowserIcon
                    className="footer-icon"
                    sx={{
                      fontSize: "2rem",
                      color: "rgba(10,10,10,0.8)",
                      "&:hover": { color: amber[700] },
                    }}
                  />
                </IconButton>
              </Tooltip>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-right">
      <ul className="footer-nav">
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
              Create Account
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
