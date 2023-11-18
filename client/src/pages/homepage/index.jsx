import { React, createContext, useState } from "react";
import "./style.css";
import logo from "../../assets/logo3.png";
import { useNavigate } from "react-router-dom";
import { useGoogleLogin } from "@react-oauth/google";

export const AuthContext = createContext();

const Homepage = () => {
  const [userTokenResponse, setUserTokenResponse] = useState("");
  const navigate = useNavigate();
  const LoginButton = () => {
    const login = useGoogleLogin({
      onSuccess: (codeResponse) => {
        setUserTokenResponse(codeResponse);
        navigate("/metrics"); // Redirect to the welcome page after successful login
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
          <div className="hero-content">
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
        <div className="connect-button">
          <button className="button1" onClick={handleConnectClick}>
            CONNECT DEVICE
          </button>
          <div className="scroll-down"></div>
        </div>
      </div>
      {/* About Section */}
      <h1 className="about-title">Our Mission</h1>
      <div className="about" id="about">
        <div className="about-heading">
          <p>
            Welcome to DriveAwake, redefining road safety with cutting-edge EEG
            tech to combat sleep fatigue on long drives. Seamlessly integrated,
            it monitors real-time brain activity, ensuring focused journeys for
            safer travels—your safety matters, mile after mile.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
