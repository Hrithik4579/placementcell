import React from 'react'
import './Navbar.css';

export default function Navbar() {

  return (
    <div>
      <div className="bg-img">
        <div className="container12">
          <div className="topnav">
            <a href="#home">Home</a>
            <a href="#news">News</a>
            <a href="#contact">Contact</a>
            <a href="#about">About</a>
          </div>
        </div>
      </div>
    </div>
  )
}
