import React, { useState } from "react";
import Home from "./components/home";
import Login from "./components/pages/login";
import About from "./components/pages/about";
import Survey from "./components/pages/survey";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  const [currentPage, setCurrentPage] = useState("Home");

  return (
    <>
      <Router>
        <body>
          <div id="menu">
            <ul id="menu-items">
              <li className="menu-item">
                <a href="/">Home</a>
              </li>
              <li className="menu-item">
                <a href="/survey">Survey</a>
              </li>
              <li className="menu-item">
                <a href="/about">About Us</a>
              </li>
              <li className="menu-item">
                <a href="/login">Login</a>
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
