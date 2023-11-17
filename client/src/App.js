import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./pages/homepage";
import Signin from "./pages/signin";
// import { AuthProvider } from "./AuthContext";
import "./App.css";

const App = () => {
  return (
    <>
      {/* <AuthProvider> */}
      <Router>
        <Routes>
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/signin" element={<Signin />} />
        </Routes>
      </Router>
      {/* </AuthProvider> */}
    </>
  );
};

export default App;
