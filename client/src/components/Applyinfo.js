import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Snavbar from './Snavbar';
export default function Applyinfo(props) {
  const { companyId } = useParams();
  const [company, setCompany] = useState({});


  useEffect(() => {

    const fetchCompany = async () => {
      try {
        const response = await fetch(`http://localhost:8000/api/students/job/${companyId}`, {
          method: "GET",
          credentials: 'include',
          headers: {
            "Content-Type": "application/json",
          }
        });
        const json = await response.json();
        if (json.success) {
          setCompany(json.data);
        }
        else {
          console.log("fetching unsuccessful");
        }
      }

      catch (error) {
        console.log("error fetching company", error);
      }
    };

    fetchCompany();
  }, [companyId]);


  const formatRegister = (dateString) => {
    return new Date(dateString).toLocaleDateString();
  }

  const handleClick = async (e) => {
    e.preventDefault();
    
    const response = await fetch(`http://localhost:8000/api/applications`, {
      method: "POST",
      credentials: 'include',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ jobId: companyId })
    });
    
    if (!response.ok){
      alert("Application unsuccessful");
      return;
    }
    alert("Applied Successfully!");
    document.getElementById("apply_button").disabled = true;
  }

  return (
    <div>
      <Snavbar />
      <h1 className='text-center'><b><u>Company Details</u></b></h1>

      {Object.keys(company).length > 0 ? (
        <div className='mt-5'>
          <span>Company name: {company.companyName}</span>
          <hr />
          <span className='display-7'>Batch: {company.batch}</span><hr />
          <span className='display-7'>CGPA: {company.cgpa} </span><hr />
          <span className='display-7'>Branch: {company.branches}</span><hr />
          <span className='display-7'>Place of posting: {company.location}</span><hr />
          <span className='display-7'>Stipend: {company.salary}</span><hr />
          <span className='display-7'>Category: {company.type}</span><hr />
          <span className='display-7'>Registration last date: {formatRegister(company.registerBy)}</span><hr />
          <input type="file" className="form-control mb-5" id="inputGroupFile02" />
          <button className='btn btn-dark' id="apply_button" onClick={handleClick}>Apply</button>
        </div>
      ) : (<p>loading...</p>
      )}
    </div>
  )
}
