import React from "react";
// import Home from "./components/home";
import Login from "./components/pages/login";
import About from "./components/pages/about";
import Survey from "./components/pages/survey";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <body>
          <div id="menu">
            <ul id="menu-items">
              <li className="menu-item">
                <Link to="/">Home</Link>
              </li>
              <li className="menu-item">
                <Link to="/survey">Survey</Link>
              </li>
              <li className="menu-item">
                <Link to="/about">About Us</Link>
              </li>
              <li className="menu-item">
                <Link to="/login">Login</Link>
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
