import React, { useState } from "react";
import "./Contact.css";

export const Contact = () => {
  const initialValues = {
    name: "",
    email: "",
    msg: "",
  };

  const [inputData, setInputData] = useState(initialValues);

  const handleChange = (e) => {
    setInputData({
      ...inputData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="contact-container" id="contact">
      <div className="contact-wrapper">
        <h2>CONTACT US</h2>
        <form className="contact-form">
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={inputData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={inputData.email}
            onChange={handleChange}
            required
          />
          <textarea
            type="text"
            rows="15"
            placeholder="Message"
            name="msg"
            value={inputData.msg}
            onChange={handleChange}
            required
          />
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};
