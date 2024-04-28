import React from "react";
// import { Link } from "react-router-dom";
import "./login.css";
import "./Anavbar.css"
import { Link, useLocation } from 'react-router-dom';


export default function Anavbar() {
  const location = useLocation();
  return (
    //     <div className="container-fluid">
    //       <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
    //   <div className="container-fluid">
    //     <Link className="navbar-brand mr-5" to="/home">JIIT</Link>
    //     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    //       <span className="navbar-toggler-icon"></span>
    //     </button>
    //     <div className="collapse navbar-collapse" id="navbarSupportedContent">
    //       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
    //         <li className="nav-item">
    //           <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
    //         </li>
    //         <li className="nav-item">
    //           <Link className="nav-link" to="/about">About</Link>
    //         </li>
    //         <li className="nav-item">
    //           <Link className="nav-link" to="/addstudent">Add Student</Link>
    //         </li>
    //         <li className="nav-item">
    //           <Link className="nav-link" to="/addcompany">Add Company</Link>
    //         </li>
    //       </ul>
    //       <form className="d-flex" role="search">
    //         <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
    //         <button className="btn btn-outline-success" type="submit">Search</button>
    //       </form>
    //     </div>
    //   </div>
    // </nav>
    //     </div>
    <div>
      
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark ">
        <div className="container-fluid">
          <div class="jiitlogo">
            <i className="bx bxl-mailchimp"></i>
          </div>
          <Link className="navbar-brand bebas-neue-regular " to="/home">
            JIIT T&P
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
          <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item {`nav-item ${location.pathname === '/home' ? 'active' : ''}`} ">
                <Link
                  className="nav-link"
                  aria-current="page"
                  to="/home"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item ms-lg-0 {`nav-item ${location.pathname === '/home' ? 'active' : ''}`}">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item ms-lg-0 {`nav-item ${location.pathname === '/home' ? 'active' : ''}`}">
                <Link className="nav-link" to="/addstudent">
                  Add Student
                </Link>
              </li>
              <li className="nav-item ms-lg-0">
                <Link className="nav-link {`nav-item ${location.pathname === '/home' ? 'active' : ''}`}" to="/addcompany">
                  Add Company
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>



      
      
    </div>
  );
}
