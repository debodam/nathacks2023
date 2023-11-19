import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";
import logo from "../../assets/logo3.png";
import io from "socket.io-client";

const Alerts1 = () => {
  const navigate = useNavigate();
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    const socket = io("http://127.0:5000"); // Update with your Flask server address

    socket.on("alert", () => {
      // Display the alert when the threshold is crossed
      console.log("Alert event received");
      setShowAlert(true);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const handleDisconnect = () => {
    // Add any necessary logic before navigating, if needed
    navigate("/");
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
      {/* Display Alert */}
      {showAlert && (
        <div className="alert-popup">
          <p>Threshold crossed! Display your alert message here.</p>
          <button onClick={() => setShowAlert(false)}>Close Alert</button>
        </div>
      )}
    </div>
  );
};

export default Alerts1;
