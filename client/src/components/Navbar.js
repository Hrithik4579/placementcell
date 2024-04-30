import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css';
export default function Navbar() {
  return (
    <div>
        <div className="bg-img">
  <div className="container" id="imagebg">
    <div className="topnav">
      <Link to="/">Home</Link>
      <Link to="#news">About</Link>
      <Link to="#contact">Archive</Link>
      <Link to="/login">T&P Portal</Link>
      <Link to='/'>Our Team</Link>
      <Link to='/'>Contact us</Link>
    </div>
  </div>
</div>
<div class="centered"><h1>JIIT Placment Portal</h1></div>

    </div>
  )
}
