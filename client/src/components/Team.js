import React from 'react'
import './Team.css'
export default function Team() {
  return (
    <div>
        <div id="ourteam">
            <center><h1 id="our"><b><u>Our Team</u></b></h1></center>
        </div>
      <div className="card">
  <img src={require( "./dhruv.jpeg")} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Dhruv Gupta</h5>
    <p className="card-text">Computer Science</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
<div className="card">
<img src={require( "./kushagra.jpeg")} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Kushagara Bansal</h5>
    <p className="card-text">Computer Science</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
<div className="card" id="third3">
<img src={require( "./hrithik.jpeg")} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Hrithik Gopal Bhagat</h5>
    <p className="card-text">Computer Science</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </div>
  )
}
