import React from 'react'
import { Link } from 'react-router-dom'
import "./login.css"
import Snavbar from './Snavbar';

export default function Applyitem(props) {
  
  return (
    <div>
      <Snavbar/>
    <div className='company_card'>
      <div className="card">
        <div className="card-header">
          {props.post}
        </div>
        <div className="card-body">
          <h5 className="card-title">{props.cname}</h5>
          <p className="card-text">{props.ctc}</p>
          <Link to={`/apply/${props.id}`} className="btn btn-primary">view opportunity</Link>

        </div>
      </div>
    </div>
    </div>
  )
}

