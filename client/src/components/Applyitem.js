import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import "./login.css"
import Companyinfo from './Companyinfo'
export default function Applyitem(props) {
  const {articles} = props;
  return (
    <div className='company_card'>
      <div className="card">
        <div className="card-header">
          {props.post}
        </div>
        <div className="card-body">
          <h5 className="card-title">{props.cname}</h5>
          <p className="card-text">{props.ctc}</p>
          <Link to={`/company/${props.id}`} className="btn btn-primary">view opportunity</Link>

        </div>
      </div>
    </div>
  )
}

