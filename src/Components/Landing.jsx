import React from "react";

import "../css/landing.css";
import landingSVG from "../Illustrations/landing-illus.png";
// import blobSVG from "../Illustrations/blob-haikei.svg";
// import blobSVG from "../Illustrations/blob-haikei-1.svg";
import blobSVG from "../Illustrations/blob.svg";

function Landing() {
  return (
    <>
      <div id="landing">
        <svg
          className="decor-image decor-image-1"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#2C74B3"
            d="M52.5,-61.4C65.5,-51.6,71.8,-32.7,70.9,-15.8C70,1.2,61.9,16.1,52.6,28.6C43.3,41.2,32.8,51.3,18.7,60.2C4.6,69.2,-13.1,77,-27.2,72.7C-41.2,68.4,-51.5,52.1,-55.5,36.3C-59.4,20.6,-56.9,5.5,-55.2,-10.7C-53.5,-26.9,-52.5,-44.2,-43.5,-54.7C-34.4,-65.3,-17.2,-69,1.3,-70.5C19.7,-72.1,39.4,-71.3,52.5,-61.4Z"
            transform="translate(100 100)"
          />
        </svg>

        <img className="decor-image decor-image-2" src={blobSVG} alt="" />
        {/* <svg className="decor-image decor-image-2" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#0F62FE"
            d="M35.6,-39.4C47,-32.9,57.6,-22.5,63.5,-8.3C69.4,5.8,70.7,23.7,63.1,36C55.4,48.2,38.9,54.9,23,58.7C7.1,62.6,-8.2,63.6,-22.8,59.6C-37.4,55.7,-51.2,46.6,-61.7,33.3C-72.3,20,-79.4,2.3,-77.6,-14.7C-75.8,-31.7,-65,-48.2,-50.6,-54.2C-36.2,-60.2,-18.1,-55.7,-3,-52.1C12.1,-48.5,24.2,-45.9,35.6,-39.4Z"
            transform="translate(100 100)"
          />
        </svg> */}

        <div className="landing-left">
          <h1 className="landing-heading">
            <span>Productivity.</span> <br /> All In One Place.
          </h1>
          <p className="landing-para landing-para-1">
            ToManage aims to provide all the task management and productivity
            apps under a single hood. Your personal assistant for taking and
            managing notes, anytime, anywhere.
          </p>
          <p className="landing-para landing-para-2">
            ToManage currently offers two Apps: <a href="#apps"> ToNoter</a> and
            <a href="#apps"> ToDoer</a>
          </p>

          <div className="landing-buttons">
            <button className="landing-button landing-button-primary">
              Explore
            </button>
            <button className="landing-button landing-button-secondary">
              Contact
            </button>
          </div>
        </div>
        <div className="landing-right">
          <img className="landing-image" src={landingSVG} alt="" />
        </div>
      </div>
    </>
  );
}

export default Landing;
