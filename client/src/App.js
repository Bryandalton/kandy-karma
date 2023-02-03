import React from "react";
// import Home from "./components/home";
import Login from "./components/pages/login";
import About from "./components/pages/about";
import Survey from "./components/pages/survey";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <body>
          <div id="menu">
            <ul id="menu-items">
              <li className="menu-item">
                <link to="/">Home</link>
              </li>
              <li className="menu-item">
                <link to="/survey">Survey</link>
              </li>
              <li className="menu-item">
                <link to="/about">About Us</link>
              </li>
              <li className="menu-item">
                <link to="/login">Login</link>
              </li>
            </ul>
          </div>
          <div>
            <div id="menu-background-image">
              <div className="display-container">
                <Routes>
                  <Route path="/about" element={<About />} />
                  <Route path="/survey" element={<Survey />} />
                  <Route path="/login" element={<Login />} />
                </Routes>
              </div>
            </div>
          </div>
        </body>
      </Router>
    </>
  );
}

export default App;
