import React, { useEffect, useState } from 'react'
import Anavbar from './Anavbar'
import { useParams } from 'react-router-dom'

export default function Companyinfo(props) {
   const {companyId}=useParams();
   const [company,setCompany]=useState({});
   useEffect(()=>{
    const fetchCompany=async()=>{
      try{
        const response=await fetch(`http://localhost:8000/api/admin/job/${companyId}`,{
          method: "GET",
          credentials: 'include',
          header:{
            "Content-Type":"application/json",
          }
        });
        const json=await response.json();
        if(json.success){
          setCompany(json.data);
        }
        else{
          console.log("fetching unsuccessful");
        }
      }
      catch(error){
        console.log("error fetching company",error);
      }
    };
    fetchCompany();
  },[companyId]);
  const formatRegister=(dateString)=>{
    return  new Date(dateString).toLocaleDateString();
  }
  return (
    <div>
      <Anavbar/>
      <h1 className='text-center'><b><u>Company Details</u></b></h1>

      {Object.keys(company).length>0?(
      <div className='mt-5'>
        <span>Company name: {company.companyName}</span>
        <hr/>
        <span className='display-8'>Batch: {company.batch}</span><hr/>
        <span className='display-8'>CGPA: {company.cgpa} </span><hr/>
        <span className='display-8'>Branch: {company.branches}</span><hr/>
        <span className='display-8'>Place of posting: {company.location}</span><hr/>
        <span className='display-8'>Role: {company.role}</span><hr/>
        <span className='display-8'>Stipend: {company.salary}</span><hr/>
        <span className='display-8'>Category: {company.type}</span><hr/>
        <span className='display-8'>Registration last date: {formatRegister(company.registerBy)}</span><hr/>  
      </div>
      ):(<p>loading...</p>
      )}
      </div>
  )
}
