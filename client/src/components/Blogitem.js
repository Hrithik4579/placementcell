import React from 'react'
import { Link } from 'react-router-dom'
import "./login.css"
import Snavbar from './Snavbar';


export default function Blogitem(props) {

  const shortDescription = props.description.substring(0, 75) + "...";
  
  return (
    <div>
      <Snavbar/>
    <div className='company_card mt-5 '>
      <div className="card">
        <div className="card-header ">
          {props.batch}
        </div>
        <div className="card-body">
          <h5 className="card-title">{props.cname}</h5>
          <p className="card-text text-muted d-block fs-7">{props.type}</p>
          <p className="card-text text-muted d-block fs-8">{shortDescription}</p>

          <Link to={`/blog/${props.id}`} className="btn btn-primary">View Blog</Link>

        </div>
      </div>
    </div>
    </div>
  )
}

