import "./login.css"
import React from 'react'
import Anavbar from './Anavbar'
import Asidebar from "./Asidebar"
export default function Addstudent() {
  return (
    <div>
        <Anavbar/>
        <div className='mt-3 nav'>
            <h2><u>Enter student details below:</u></h2>
        </div>
      <form className="admin_form">
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Student Name</label>
    <input type="text" className="form-control" id="name1"/>
  </div>
  <div className='mb-3'>
    <label htmlFor='enrol' className='form-label'>Enrollment Number:</label>
    <input type='number' className='form-control'/>
  </div>
  <div className='mb-3'>
    <label htmlFor='email' className='form-label'>Email:</label>
    <input type='email' className='form-control'/>
  </div>
  <div className='mb-3'>
    <label htmlFor='branch' className='form-label'>Branch:</label>
    <input type='text' className='form-control'/>
  </div>
  <div className='mb-3'>
    <label htmlFor='gradyear' className='form-label'>Graduation Year:</label>
    <input type='number' className='form-control'/>
  </div>
  <div className='mb-3'>
    <label htmlFor='cgpa' className='form-label'>CGPA:</label>
    <input type='number' className='form-control'/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  
  <div>
  <button type="submit" className="btn btn-dark">Add Student</button>
  </div>
</form>
    </div>
  )
}
