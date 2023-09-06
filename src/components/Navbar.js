import React, { useEffect, useState } from "react";
import { Link,useNavigate} from "react-router-dom";
import Logo from "../images/IIT_JAMMU_LOGO.png";

//Components
import "./Navbar.css";

const Navbar = () => {
  const auth=localStorage.getItem('user');
  const navigate=useNavigate();
  const logout=()=>{
    localStorage.clear();
    navigate('/signup')
  }
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <div class="container-fluid">
          <Link class="navbar-brand" to="/">
            {/* <div
              className="text-white"
              style={{ fontSize: "35px", fontWeight: "800" }}
            >
              IIT JAMMU
            </div> */}
            <img
              src={Logo}
              alt="IIT JAMMU"
              style={{
                height: "70px",
                width: "200px",
                // padding: "10px",
                margin: "0 auto",
              }}
            />
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse ms-5 "
            id="navbarSupportedContent"
          >
            <ul
              class="navbar-nav me-auto mb-2 mb-lg-0 "
              style={{ fontSize: "25px",fontWeight:'700' }}
            >
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/">
                  Dashboard
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/list">
                  Company
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/calendar">
                  Calendar
                </Link>
              </li>
            </ul>
            <form class="d-flex" role="search">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-outline-light" type="submit">
                Search
              </button> 
              &nbsp;&nbsp;
              <Link to='/home' onClick={logout}>
              <button class="btn btn-outline-light" type="submit" style={{background:'red'}}>
                LogOut
              </button>
              </Link>
              &nbsp;&nbsp;
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
