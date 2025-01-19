import React from "react";
import "./Card.css";

export const Card = ({ theme }) => {
  return (
    <div className="card">
      <img
        src="https://royaltx.org/wp-content/uploads/2023/12/60612053_m-scaled.jpg"
        alt="project-pic"
      />
      <div className="project-info">
        <h3>Project 1</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
          nesciunt quia quaerat aliquam id aspernatur voluptatibus! Recusandae
          incidunt totam est.
        </p>
      </div>
    </div>
  );
};
