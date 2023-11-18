import React from "react";
import "./style.css";
import logo from "../../assets/logo_2.png";

const Homescreen = () => {
  return (
    <div>
      {/* Heading Section */}
      <div className="heading">
        <div className="section__padding">
          <div className="heading-content">
            <img src={logo} className="heading-logo" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homescreen;
