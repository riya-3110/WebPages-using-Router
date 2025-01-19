import React from "react";
import "./About.css";

export const About = () => {
  return (
    <div className="about-container" id="about">
      <div className="about-wrapper">
        <div className="left-container">
          <img
            src="https://media.istockphoto.com/id/1348209421/photo/smiling-business-woman-working-with-laptop-while-looking-at-camera-in-modern-startup-office.jpg?s=612x612&w=0&k=20&c=-YOjhdxdWLjflmpzPyUjtYL80zhbJYqSANk6hhDPXL0="
            alt="woman-pic"
          />
        </div>
        <div className="right-container">
          <h1>ABOUT US</h1>
          <p className="contentLineOne">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore,
            repellendus?
          </p>
          <p className="contentLineTwo">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            recusandae consectetur, tempora delectus facere impedit commodi
            atque, aperiam distinctio excepturi similique quidem deserunt quia
            repellat deleniti vero odit doloremque, nisi harum nobis
            voluptatibus rerum nesciunt itaque et. Totam, modi fugit.
          </p>
          <button>Read More</button>
        </div>
      </div>
    </div>
  );
};
