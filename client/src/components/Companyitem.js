import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./login.css";
import "./Companyitem.css";
import Companyinfo from "./Companyinfo";
import bin from "../bin.jpg";
import { IconName } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";

export default function Companyitem(props) {
  const { articles } = props;
  const [art, setart] = useState(articles);
  const deleteArticle = async (id) => {
    const response = await fetch(`http://localhost:8000/api/job/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": JSON.parse(localStorage.getItem("token")),
      },
    });
    const json = response.json();
    const newarticles = art.filter((article) => {
      return article._id !== id;
    });
    setart(newarticles);
  };
  const Deleteartcle = () => {
    deleteArticle(art._id);
  };
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
        <div class="mt-5">
          <h3 class="heading">{props.post}</h3>
          <h3>{props.ctc}</h3>
        </div>
        <div className="flex">
        <Link to={`/company/${props.id}`} className="btn btn-primary button-33 ">
          view 
        </Link>
        
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