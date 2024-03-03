import React, { useState } from "react";
import './login.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// import {useNavigate} from "react-router-dom";
const Login = (props) => {
    const [credentials,setCredentials]=useState({email: "",password: ""});
    // let navigate=useNavigate();
    // const handleSubmit=async (e)=>{
    //     e.preventDefault();
    //     const response = await fetch("http://localhost:5000/api/auth/login", {
    //         method: "POST",
    //         headers: {
    //           "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify({email: credentials.email,password:credentials.password}),
    //     })
    //     const json=await response.json();
    //     console.log(json);
    //     if(json.success){
    //         localStorage.setItem('token',JSON.stringify(json.authToken));
    //         props.showAlert("Logged in Successfully","success")
    //         navigate('/');
            
    //     }
    //     else{
    //         props.showAlert("Invalid Credentials","danger");
    //     }
// }
const handleChange=(e)=>{
    e.preventDefault();
    setCredentials({...credentials,[e.target.name]:e.target.value})
}

  return (
    <div className="main">
        <header>JIIT Placement Portal</header>
        <div className="container">
        <h2 className="my-3"><u>Student Login</u></h2>

      <form>
        <div className="form-group mb-3 my-4">
          <label htmlFor="email">Enroll:</label>
          <div className="inpbox">
          <input
            type="number"
            className="form-control"
            id="enroll"
            name="enroll"
            value={credentials.email}
            aria-describedby="emailHelp"
            placeholder="Enter enroll no."
            onChange={handleChange}
          />
        </div>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <div className="inpbox">
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={credentials.password}
            placeholder="Password"
            onChange={handleChange}
          />
        </div>
        </div>
        <button type="submit" className="btn btn-primary my-3">
          Submit
        </button>
        <div>
        <Link to="/" className="link text-muted">Sign in as Admin?</Link><br/><br/>
      </div>
      </form>
      </div>
    </div>
  );
};

export default Login;
