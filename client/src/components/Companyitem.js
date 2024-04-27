import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import "./login.css"
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
    const response = await fetch(`http://localhost:8000/api/admin/job/${props.id}/report`, {
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
    <div className='company_card'>
      <div className="card">
        <div className="card-header">
          {props.post}
        </div>
        <div className="card-body">
          <h5 className="card-title">{props.cname}</h5>
          <p className="card-text">{props.ctc}           <button onClick={deleteArticle} className="iconbutton"><FaTrash id="bin" /></button>
          </p>
          <Link to={`/company/${props.id}`} className="btn btn-primary">view opportunity</Link>
          <button className="btn btn-dark" onClick={generateReport} id='genbutton'>Generate Report</button>
        </div>
      </div>
    </div>
  )
}