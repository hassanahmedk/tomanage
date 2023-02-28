import React from "react";

import "../css/apps.css";
import AddTaskIcon from "@mui/icons-material/AddTask";
import NotesIcon from "@mui/icons-material/Notes";

import blobSVG from "../Illustrations/blob.svg";

function Apps() {
  return (
    <div id="apps">
      <img className="apps-decor-image" src={blobSVG} alt="" />
      <div className="app-header">
        <p className="preheading app-preheading">Learn More</p>
        <h1 className="app-heading">Applications</h1>
        <p className="app-postheading">
          Effortlessly streamline your workflow and simplify your life with 
          <span> ToManage. </span>
          Currently, ToManage provides a To-do list and a notes-taking app.
        </p>
      </div>
      <div className="app-cards">
        <div className="app-card app-card-1">
          <div className="app-card-icon tonoter-icon">
            <NotesIcon
              sx={{
                color: "#FBAB7E",
                fontSize: "2.7rem",
              }}
            />
          </div>
          <h1 className="app-card-heading todoer-heading">ToDoer</h1>
          <p className="app-card-desc">
            ToDoer is the perfect tool to help you stay on top of your daily
            tasks and accomplish your goals.
          </p>
          <div className="app-card-cta tonoter-cta">
            <a href="#a">Visit</a>
          </div>
        </div>
        <div className="app-card app-card-1">
          <div className="app-card-icon todoer-icon">
            <AddTaskIcon
              sx={{
                color: "#069A8E",
                fontSize: "2.7rem",
              }}
            />
          </div>
          <h1 className="app-card-heading tonoter-heading">ToNoter</h1>
          <p className="app-card-desc">
            ToNoter lets you organize your thoughts, simplify your life,
            simplifying note-taking process.
          </p>
          <div className="app-card-cta todoer-cta">
            <a href="#a">Visit</a>
          </div>
        </div>
      </div>
      {/* <div className="app-card app-card-2"></div> */}
    </div>
  );
}

export default Apps;
