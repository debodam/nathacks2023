import React from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";
import logo from "../../assets/logo3.png";

const Alerts1 = () => {
  const navigate = useNavigate();

  const handleDisconnect = () => {
    // Add any necessary logic before navigating, if needed
    navigate("/homepage");
  };

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
      {/* Connect Section */}
      <div className="disconnect">
        <div className="disconnect-button">
          <button className="button1" onClick={handleDisconnect}>
            DISCONNECT DEVICE 🚨
          </button>
        </div>
      </div>
    </div>
  );
};

export default Alerts1;
