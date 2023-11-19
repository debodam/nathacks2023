import React, { useEffect } from "react";
import { googleLogout } from "@react-oauth/google";
import "./style.css";
import logo from "../../assets/logo3.png";
import eeggraph from "../../assets/eeggraph.png";
import statisticgraph from "../../assets/statisticgraph.png";
import averagegraph from "../../assets/averagegraph.png";
import io from "socket.io-client";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const socket = io("http://localhost:5000");

const Card = ({ imageSrc, word }) => (
  <div className="card">
    <img src={imageSrc} alt={word} />
    <p>{word}</p>
  </div>
);

const Metrics = () => {
  const navigate = useNavigate(); // Define useNavigate

  // Move handleConnectClick outside the useEffect
  const handleConnectClick = () => {
    // Navigate to "/alerts1" when the "CONNECT DEVICE" button is clicked
    navigate("/alerts1");
  };

  useEffect(() => {
    socket.on("connect", () => {
      console.log("Connected to Flask server via Socket.IO");
    });

    socket.on("serial_message", (data) => {
      console.log("Received message from server: ", data);
      // Handle the received data as needed
    });

    return () => {
      socket.disconnect(); // Clean up on unmount
    };
  }, [navigate]); // Include navigate in the dependency array

  // Retrieve user information from local storage
  const storedUser = localStorage.getItem("react-oauth-google-user");

  // Use optional chaining and nullish coalescing to handle potential parsing errors
  const user = storedUser ? JSON.parse(storedUser) : null;

  const handleLogout = () => {
    // Store the user name before logging out
    const userName = user?.profileObj?.name;

    // Trigger the logout process
    googleLogout();

    // Clear user information after accessing the user's name
    localStorage.removeItem("react-oauth-google-user");

    // Redirect to the homepage
    window.location.href = "/";

    // You can use the userName variable as needed, for example, logging it
    console.log(`Logout successful. User: ${userName}`);
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
        <div>
          <button onClick={handleLogout} className="google-signin-button">
            Logout
          </button>
          {/* You can add more buttons here */}
        </div>
      </div>
      {/* Welcome Section */}
      <div className="welcome">
        <h1>Welcome, Debo Dam!</h1>
        <div className="scroll-down1"></div>
      </div>
      {/* Metrics Section */}
      <h1 className="metrics-title">Metrics Summary</h1>
      <div className="metrics" id="metrics">
        <div className="metrics-heading">
          <div className="cards">
            <Card imageSrc={eeggraph} word="EEG Graphs" />
            <Card imageSrc={statisticgraph} word="Previous Statistics" />
            <Card imageSrc={averagegraph} word="Key Averages" />
          </div>
        </div>
      </div>
      {/* Connect Button */}
      <div className="connect2">
        <div className="connect2-button">
          <button className="button2" onClick={handleConnectClick}>
            CONNECT DEVICE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Metrics;
