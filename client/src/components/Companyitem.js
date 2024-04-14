import React from 'react'
import { Link } from 'react-router-dom'
import "./login.css"
export default function Companyitem(props) {
  return (
    <div className='company_card'>
      <div className="card">
  <div className="card-header">
    {props.post}
  </div>
  <div className="card-body">
    <h5 className="card-title">{props.cname}</h5>
    <p className="card-text">{props.ctc}</p>
    <Link to="#" className="btn btn-primary">View Opportunity</Link>
  </div>
</div>
    </div>
  )
}
