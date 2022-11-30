// This should be in the components folder

// This page is finished by Zihan Xu.
import React from "react";
// import PropTypes from "prop-types";

import { Link } from "react-router-dom";
import MyImage from "../images/black-hole.png";
import "./NavBar.css"

function NavBar() {
  const pathname = window.location.pathname;
  return (
    <div className="NavBar">
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
          Stellaris
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">


              <li className="nav-item">
                <img src={MyImage} class="logo" alt="logo" />
              </li>

              <li className="nav-item">
                <Link
                  className={`nav-link ${pathname === "/" ? "active" : ""}`}
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>


              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    pathname === "/build" ? "active" : ""
                  }`}
                  to="/build"
                >
                  Build universe
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    pathname === "/list" ? "active" : ""
                  }`}
                  to="/list"
                >
                  Universes list
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    pathname === "/donation" ? "active" : ""
                  }`}
                  to="/donation"
                >
                  Donation
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    pathname === "/about" ? "active" : ""
                  }`}
                  to="/about"
                >
                  About us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

NavBar.propTypes = {};

export default NavBar;

