import React from "react";
import { Card } from "../Card/Card";
import "./Projects.css";

export const Projects = () => {
  return (
    <div className="project-container">
      <div className="project-wrapper">
        <h1>PROJECTS</h1>
        <div className="cards">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
};
