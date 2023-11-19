import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";
import logo from "../../assets/logo3.png";

const Alerts1 = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Show a pop-up after 10 seconds
    const popupTimeout = setTimeout(() => {
      setShowModal(true);
    }, 10000);

    return () => {
      clearTimeout(popupTimeout); // Clear the timeout on component unmount
    };
  }, []);

  const handleDisconnect = () => {
    // Add any necessary logic before navigating, if needed
    navigate("/");
  };

  const handleCloseModal = () => {
    setShowModal(false);
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
      {/* Styled Modal */}
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <p>It looks like your tired! It might be time to take a break.😴</p>
            <button onClick={handleCloseModal}>CLOSE</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Alerts1;
