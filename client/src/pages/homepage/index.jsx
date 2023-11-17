import React from "react";
import "./style.css";
import logo from "../../assets/logo_2.png";

const index = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="hero">
        <div className="section__padding">
          <div className="hero-content">
            <img src={logo} className="hero-logo" alt="" />
          </div>
        </div>
        <div className="hero-button">
          <button className="button1">SIGN IN</button>
          {/* You can add more buttons here */}
        </div>
      </div>
      {/* Connect Section */}
      <div className="connect">
        <div className="connect-button">
          <button className="button1">CONNECT DEVICE</button>
        </div>
      </div>
      <div className="scroll-down"></div>
    </div>
  );
};

export default index;
