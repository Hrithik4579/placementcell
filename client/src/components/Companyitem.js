import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import "./login.css"
import Companyinfo from './Companyinfo'
export default function Companyitem(props) {
  const [show,setshow]=useState(false);
  const {articles} = props;
  const [art,setart]=useState(articles);
  const handleclick=()=>{
    setshow(true);
    }
    const deleteArticle= async(id)=>{
      const response =  await fetch(`http://localhost:8000/api/job/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            "auth-token": JSON.parse(localStorage.getItem('token'))
          }
        });
        const json=response.json();
      const newarticles=art.filter((article)=>{return article._id!==id});
      setart(newarticles);
  }
  const Deleteartcle=()=>{
    deleteArticle(art._id);
  }
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
