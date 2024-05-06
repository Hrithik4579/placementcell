import React from "react";
import { Link } from "react-router-dom";
import "./login.css";

export default function Snavbar() {
  const handleClick = async () => {
    try {
      const response = await fetch(
        `http://localhost:8000/api/students/logout`,
        {
          method: "DELETE",
          credentials: "include",
          header: {
            "Content-Type": "application/json",
          },
        }
      );
      const json = await response.json();
      if (json.success) {
        alert("Logged out successfully!");
      } else {
        console.log("fetching unsuccessful");
      }
    } catch (error) {
      console.log("error fetching company", error);
    }
  };

  // return (
  //   <div>
  //     <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
  //       <div className="container-fluid">
  //         <div className="jiitlogo">
  //           <i className="bx bxl-mailchimp"></i>
  //         </div>
  //         <Link className="navbar-brand bebas-neue-regular" to="/home">
  //           JIIT T&P
  //         </Link>
  //         <button
  //           className="navbar-toggler"
  //           type="button"
  //           data-bs-toggle="collapse"
  //           data-bs-target="#navbarSupportedContent"
  //           aria-controls="navbarSupportedContent"
  //           aria-expanded="false"
  //           aria-label="Toggle navigation"
  //         >
  //           <span className="navbar-toggler-icon"></span>
  //         </button>
  //         <div
  //           className="collapse navbar-collapse justify-content-lg-start "
  //           id="navbarSupportedContent"
  //         >
  //           <ul className="navbar-nav">
  //             <li className="nav-item">
  //               <Link className="nav-link" aria-current="page" to="/shome">
  //                 Home
  //               </Link>
  //             </li>
  //             <li className="nav-item ms-lg-0">
  //               <Link className="nav-link" to="/sabout">
  //                 About
  //               </Link>
  //             </li>
  //             <li className="nav-item ms-lg-0">
  //               <Link className="nav-link" to="/applications">
  //                 Application Status
  //               </Link>
  //             </li>
  //             <li className="nav-item ms-lg-0">
  //               <Link className="nav-link" to="/vblog">
  //                 Blogs
  //               </Link>
  //             </li>
  //             <li className="nav-item ms-lg-0">
  //               <Link className="nav-link" to="/scontact">
  //                 Contact us
  //               </Link>
  //             </li>
  //             <li className="nav-item" id="logout">
  //               <Link className="nav-link" to="/logout">
  //                 <button
  //                   onClick={handleClick}
  //                   type="button"
  //                   className="btn btn-outline-info"
  //                 >
  //                   Logout
  //                 </button>
  //               </Link>
  //             </li>
  //           </ul>
  //         </div>
  //       </div>
  //     </nav>
  //   </div>
  // );
  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid justify-content-between">
          <div className="jiitlogo">
            <i className="bx bxl-mailchimp"></i>
          </div>
          <Link className="navbar-brand bebas-neue-regular" to="/home">
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
          <div className="d-flex flex-grow-1 justify-content-center">
            <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/shome">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/sabout">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/applications">
                    Application Status
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/vblog">
                    Blogs
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/scontact">
                    Contact us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="d-flex">
            <Link className="nav-link" to="/logout">
              <button
                onClick={handleClick}
                type="button"
                className="btn btn-secondary btn1"
              >
                Logout
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
  
  
}
