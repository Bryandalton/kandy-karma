import React from "react"

export default function Home({currentPage, handlePageChange, children}) {

  return (
    <>
    <div id="menu">
      <ul id="menu-items">
        <li className="menu-item">
          <a className={currentPage === 'Home'} href="/home" onClick={() => handlePageChange("Home")}>
            Home
          </a>
        </li>
        <li className="menu-item">
          <a className={currentPage === 'Survey'} 
            href="/survey"
            onClick={() => handlePageChange("Survey")}>
            Survey
          </a>
        </li>
        <li className="menu-item">
          <a
            className={currentPage === 'About'}
            href="/about"
            onClick={() => handlePageChange("About")}
          >
            About Us
          </a>
        </li>
        <li className="menu-item">
          <a
            className={currentPage === 'Login'}
            href="/login"
            onClick={() => handlePageChange("Login")}
          >
            Login
          </a>
        </li>
      </ul>
    </div>
    </>
  );
}
