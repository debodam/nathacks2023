import React from "react";
import "./style.css";
import logo from "../../assets/logo_2.png";
import { useGoogleLogin } from "@react-oauth/google";

const clientId =
  "985974388232-na3n5t8lhtf13fl0r3vuugsg3umofb2s.apps.googleusercontent.com";

const LoginButton = () => {
  const login = useGoogleLogin({
    onSuccess: (codeResponse) => console.log(codeResponse),
    flow: "auth-code",
  });
  return (
    <button className="google-signin-button" onClick={() => login()}>
      Sign in with Google
    </button>
  );
};

const Signin = () => {
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
      {/* About Section */}
      <div className="google">
        <div className="google-heading">
          <LoginButton />
        </div>
      </div>
    </div>
  );
};

export default Signin;
