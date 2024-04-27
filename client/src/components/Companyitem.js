
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import "./login.css"
import "./Companyitem.css";
import Companyinfo from './Companyinfo'
import bin from "../bin.jpg";
import { IconName } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";

export default function Companyitem(props) {

  const deleteArticle = async () => {
    const response = await fetch(`http://localhost:8000/api/admin/job/${props.id}`, {
      method: "DELETE",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        "auth-token": JSON.parse(localStorage.getItem('token'))
      }
    });
    if (!response.ok) {
      throw new Error('Failed to delete article');
    }
    props.onArticleDeleted(props.id)
  }

  const generateReport = async () => {
    const response = await fetch(`http://localhost:8000/api/admin/job/report/${props.id}`, {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      }
    });
    if (!response.ok) {
      throw new Error('Failed to generate report');
    }
    const blob = await response.blob();
    const url = window.URL.createObjectURL(new Blob([blob]));
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `report_${props.id}.xlsx`);
    document.body.appendChild(link);
    link.click();
    link.parentNode.removeChild(link);
  }

  return (
    <div className="company_card">
      {/* <div class="container mt-5 mb-3"> */}
      {/* <div class="row"> */}
      {/* <div class="col-md-4"> */}
      <div class="card p-3 mb-2">
        <div class="d-flex justify-content-between">
          <div class="d-flex flex-row align-items-center">
            <div class="icon">
              {" "}
              <i class="bx bxl-mailchimp"></i>{" "}
            </div>
            <div class="ms-2 c-details">
              <h6 class="mb-0">{props.cname}</h6>
            </div>
          </div>
          <div class="badge">
            {" "}
            <span>Design</span>{" "}
          </div>
        </div>

        <div className="card-body">
          <h5 className="card-title">{props.cname}</h5>
          <p className="card-text">{props.ctc}           <button onClick={deleteArticle} className="iconbutton"><FaTrash id="bin" /></button>
          </p>
          <Link to={`/company/${props.id}`} className="btn btn-primary">view opportunity</Link>
          <button className="btn btn-dark" onClick={generateReport} id='genbutton'>Generate Report</button>
        </div>
      </div>
      {/* </div> */}
      {/* </div> */}
      {/* </div> */}

      {/* <div className="card text-white">
        <div className="card-header">{props.cname}</div>
        <div className="card-body">
          <h5 className="card-title">{props.post}</h5>
          <h5>
            <p className="card-text  mb-3">{props.ctc}</p>
          </h5>
          <Link to={`/company/${props.id}`} className="btn btn-primary ">
            view opportunity
          </Link>
        </div>
      </div> */}
    </div>
  );
}