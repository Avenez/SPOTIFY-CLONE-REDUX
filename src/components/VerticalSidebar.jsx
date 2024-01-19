import { Col, Nav } from "react-bootstrap";
import logo from "../assets/Spotify_Logo.png";

import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const VerticalSideBar = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      navigate(`/search-page/${query}`);
    }
  };

  return (
    <Col md={2}>
      <Nav className="p-2 navbar navbar-expand-md fixed-left justify-content-between" id="sidebar">
        <div className="nav-container mt-4">
          <Link to={"/"} className="navbar-brand" href="index.html">
            <img src={logo} alt="Spotify_Logo" width="131" height="40" />
          </Link>
          <div id="navbarNavAltMarkup">
            <div className="navbar-nav mt-4">
              <ul>
                <li>
                  <Link className="off-nav-link" to={"/"}>
                    <i className="bi bi-house me-1"></i> Home
                  </Link>
                </li>
                <li>
                  <Link className="off-nav-link" to={"/YourLibrary"}>
                    <i className="bi bi-collection-play me-2"></i>
                    Your Library
                  </Link>
                </li>
                <li>
                  <div className="input-group mt-3">
                    <input
                      type="text"
                      className="form-control mb-2"
                      id="searchField"
                      placeholder="Search"
                      aria-label="Search"
                      aria-describedby="basic-addon2"
                      onChange={handleChange}
                      onKeyDown={handleKeyDown}
                    />
                    <div className="input-group-append" style={{ marginBottom: "4%" }}>
                      <Link
                        to={"/search-page/" + query}
                        className="btn btn-outline-secondary btn-sm py-2"
                        type="button"
                        id="button-addon1"
                      >
                        <i class="bi bi-search"></i>
                      </Link>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="nav-btn linkBottomNav">
          <button className="btn signup-btn" type="button">
            Sign Up
          </button>
          <button className="btn login-btn" type="button">
            Login
          </button>
          <a href="alt">Cookie Policy</a> | <a href="alt"> Privacy</a>
        </div>
      </Nav>
    </Col>
  );
};

export default VerticalSideBar;
