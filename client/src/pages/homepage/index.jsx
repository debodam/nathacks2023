import { React, createContext, useState, useEffect } from "react";
import "./style.css";
import logo from "../../assets/logo3.png";
import productpic from "../../assets/product_picture-removebg.png";
import eeggraph from "../../assets/eeg_graph.png";
import { useNavigate } from "react-router-dom";
import { useGoogleLogin } from "@react-oauth/google";

export const AuthContext = createContext();

const Homepage = () => {
  const [userTokenResponse, setUserTokenResponse] = useState("");
  const navigate = useNavigate();

  // Add the Intersection Observer logic
  useEffect(() => {
    const sections = document.querySelectorAll(".fade-in-section");

    const handleIntersection = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // Adjust this threshold as needed
    });

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []); // Empty dependency array ensures that this effect runs only once

  const LoginButton = () => {
    const login = useGoogleLogin({
      onSuccess: (codeResponse) => {
        setUserTokenResponse(codeResponse);
        navigate("/metrics");
      },
      flow: "auth-code",
    });

    return (
      <div>
        <button className="google-signin-button" onClick={() => login()}>
          SIGN IN
        </button>
      </div>
    );
  };

  const handleConnectClick = () => {
    navigate("/alerts1");
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="hero">
        <div className="section__padding">
          <div className="hero-content fade-in-section">
            <img src={logo} className="hero-logo" alt="" />
          </div>
        </div>
        <div>
          <LoginButton />
          {/* You can add more buttons here */}
        </div>
      </div>
      {/* Connect Section */}
      <div className="connect">
        <div className="connect-button fade-in-section">
          <button className="button1" onClick={handleConnectClick}>
            CONNECT DEVICE
          </button>
          <div className="scroll-down"></div>
        </div>
      </div>
      {/* About Section */}
      <div className="about" id="about">
        <div className="about-heading fade-in-section">
          <img src={productpic} className="productpic" alt="" />
          <p>
            Welcome to DriveAwake, redefining road safety with cutting-edge EEG
            tech to combat sleep fatigue on long drives. Seamlessly integrated,
            it monitors real-time brain activity, ensuring focused journeys for
            safer travels—your safety matters, mile after mile.
          </p>
        </div>
      </div>
      {/* Track Section */}
      <div className="track">
        <div className="section__padding">
          <div className="track-heading fade-in-section">
            <p>
              Unlock comprehensive metrics in the Metrics section. Explore past
              EOG graphs, track averages, and access key statistics for safer
              travels. Sign in now to view and analyze data patterns, enhancing
              focus and driving securely.
            </p>
            <img src={eeggraph} className="hero-logo" alt="" />
          </div>
        </div>
      </div>
      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-content">
          <p>&copy; 2023 DriveAwake. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;
