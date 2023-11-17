import React from "react";
import "./style.css";
import logo from "../../assets/logo.png";

const index = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="hero">
        <div className="section__padding">
          <div className="hero-content">
            <img src={logo} className="" alt="" />
            {/* <button onClick={() => handleNavigate("/donate")}>
              DONATE NOW
            </button>
            <button onClick={() => handleNavigate("/buynow")}>BUY NOW</button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
