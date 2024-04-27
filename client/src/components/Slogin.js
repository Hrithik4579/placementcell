import React, { useState } from "react";
import './login.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// import {useNavigate} from "react-router-dom";
const SLogin = (props) => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [enrol,setEnrol]= useState(0);
  const [pass,setPass]= useState("");
  let navigate=useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
  //   const response = await fetch("http://localhost:8000/api/student/login", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ email: enrol, password: pass }),
  //   })
  //   const json = await response.json();
  //   console.log(json);
  //   if (json.success) {
  //     localStorage.setItem('token', JSON.stringify(json.authToken));
  //     props.showAlert("Logged in Successfully", "success")
      navigate('/shome');

  //   }
  //   else {
  //     props.showAlert("Invalid Credentials", "danger");
  //   }
  }
  const handleChange = (e) => {
    e.preventDefault();
    // setCredentials({ ...credentials, [e.target.name]: e.target.value })
    if(e.target.name=="enroll"){
      setEnrol(parseInt(e.target.value));
    }
    else{
      setPass(e.target.value);
    }
        setCredentials({ ...credentials, [e.target.name]: e.target.value })

  }

  return (
    <div className="main">
      {/* <header>JIIT Placement Portal</header> */}
      <div className="container container1">
        <h2 className="my-3 fs-4">Student Login</h2>

        <form onSubmit={handleSubmit}>
          <div className="form-group mb-3 my-4">
            <label htmlFor="enroll" className="ftext">Enroll:</label>
            <div className="inpbox">
              <input
                type="number"
                className="form-control"
                id="enroll"
                name="enroll"
                value={enrol}
                aria-describedby="emailHelp"
                placeholder="enroll no."
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="password" className="ftext">Password:</label>
            <div className="inpbox">
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                value={pass}
                placeholder="Password"
                onChange={handleChange}
              />
            </div>
          </div>
          <button type="submit" className="btn btn-primary my-3 mt-5 signin">
            Sign in
          </button>
          <div className="text-center">
            <Link to="/" className="link text-muted">Sign in as Admin?</Link><br /><br />
          </div>
        </form>
      </div>
      
    </div>
  );
};

export default SLogin;
