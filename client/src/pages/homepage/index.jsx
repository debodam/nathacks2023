import React from "react";
import "./style.css";
import logo from "../../assets/logo_2.png";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const navigate = useNavigate();

  const handleSignInClick = () => {
    // Navigate to the "/signin" page
    navigate("/signin");
  };
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
          <button className="button1" onClick={handleSignInClick}>
            SIGN IN
          </button>
          {/* You can add more buttons here */}
        </div>
      </div>
      {/* Connect Section */}
      <div className="connect">
        <div className="connect-button">
          <button className="button1">CONNECT DEVICE</button>
          <div className="scroll-down"></div>
        </div>
      </div>
      {/* About Section */}
      <h1 className="about-title">Our Mission</h1>
      <div className="about" id="about">
        <div className="about-heading">
          <p>
            Welcome to DriveAwake, where road safety meets innovation. Our
            mission is to combat the risks of sleep fatigue during long drives.
            Using cutting-edge EEG technology, DriveAwake monitors your brain
            activity in real-time, detecting signs of drowsiness before they
            become a danger. Seamlessly integrated into your vehicle, our alert
            system provides visual and auditory cues, ensuring you stay awake
            and focused on the road. DriveAwake is not just a product; it's your
            dedicated co-pilot, prioritizing your safety and transforming the
            way you travel. Choose DriveAwake for safer journeys, fewer
            accidents, and a commitment to making every road a secure passage.
            DriveAwake – because your safety matters, mile after mile.
          </p>
        </div>
      </div>
      {/* <div className="">
        <img src={logo} className="hero-logo" alt="" />
      </div> */}
    </div>
  );
};

export default Homepage;
