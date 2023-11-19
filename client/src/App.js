import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./pages/homepage";
import Homescreen from "./pages/homescreen";
import Alerts1 from "./pages/alerts1";
import Metrics from "./pages/metrics";
import "./App.css";
import { GoogleOAuthProvider } from "@react-oauth/google";

// import { AuthProvider } from "./AuthContext";

const App = () => {
  return (
    <GoogleOAuthProvider clientId="985974388232-gte26u89u6qeiuvp5aotpg1i5gnacoqv.apps.googleusercontent.com">
      {/* <AuthProvider> */}
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/homescreen" element={<Homescreen />} />
          <Route path="/alerts1" element={<Alerts1 />} />
          <Route path="/metrics" element={<Metrics />} />
        </Routes>
      </Router>
      {/* </AuthProvider> */}
    </GoogleOAuthProvider>
  );
};

export default App;
