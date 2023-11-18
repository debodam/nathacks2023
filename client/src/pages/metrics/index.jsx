import React, { useEffect } from "react";
import { googleLogout } from "@react-oauth/google";
import "./style.css";
import logo from "../../assets/logo3.png";
import io from "socket.io-client";
const socket = io("http://localhost:5000");

const Card = ({ imageSrc, word }) => (
  <div className="card">
    <img src={imageSrc} alt={word} />
    <p>{word}</p>
  </div>
);

const Metrics = () => {
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
  }, []);
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
    window.location.href = "/homepage";

    // You can use the userName variable as needed, for example, logging it
    console.log(`Logout successful. User: ${userName}`);
  };

  return (
    <div>
      {" "}
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
            <Card imageSrc="path_to_image1.jpg" word="Card 1" />
            <Card imageSrc="path_to_image2.jpg" word="Card 2" />
            <Card imageSrc="path_to_image3.jpg" word="Card 3" />
            {/* Add more Card components as needed */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Metrics;
