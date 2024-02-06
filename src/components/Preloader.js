// components/Preloader.js
import React from "react";
import favicon from "./images/favicon.ico";

const Preloader = () => {
  return (
    <div className="preloader">
      <div className="centrize full-width">
        <div className="vertical-center">
          <div className="spinner-logo">
            <img src={favicon} data-bg={favicon} alt="Diego" />
            <div className="spinner-dot"></div>
            <div className="spinner spinner-line"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
