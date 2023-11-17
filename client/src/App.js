import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./pages/homepage";
// import { AuthProvider } from "./AuthContext";
import "./App.css";

const App = () => {
  return (
    <>
      {/* <AuthProvider> */}
      <Router>
        <Routes>
          <Route path="/homepage" element={<Homepage />} />
        </Routes>
      </Router>
      {/* </AuthProvider> */}
    </>
  );
};

export default App;
