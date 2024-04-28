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
      <div class="card p-3 mb-2">
        <div class="d-flex justify-content-between">
          <div class="d-flex flex-row align-items-center">
            <div class="icon">
              {" "}
              <i class="bx bxl-mailchimp"></i>{" "}
            </div>
            <div class="ms-2 c-details">
              <h5 class="mb-0">{props.cname}</h5>
            </div>
          </div>
          <div className="badge">
            <span>{props.role}</span>
          </div>
        </div>
        <div class="mt-4 mb-4">
          <div class="d-flex align-items-center">
            <div class="icon2">
              {" "}
              <i class="bx bxl-mailchimp"></i>{" "}
            </div>

            <span className="text-muted d-block fs-5">
              <i className="fa fa-map-marker" aria-hidden="true"></i>{" "}
              {props.post}
            </span>
          </div>

          <div class="d-flex align-items-center">
            <div class="icon3">
              {" "}
              <i class="bx bxl-mailchimp"></i>{" "}
            </div>

            <span className="text-muted d-block fs-5">
              <i className="fa fa-map-marker" aria-hidden="true"></i>{" "}
              {props.ctc}
            </span>
          </div>
        </div>
        <div className="flex">
          <Link
            to={`/company/${props.id}`}
            className="btn btn-primary button-33"
          >
            view
          </Link>
        </div>
      </div>
    </div>
  );
}
