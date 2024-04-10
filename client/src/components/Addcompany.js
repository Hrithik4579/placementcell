import React from 'react'
import './login.css'
import Anavbar from './Anavbar'
export default function Addcompany() {
  return (
    <div>
        <Anavbar/>
        <div>
            <h2 className='mt-5'>
                <u>Enter Company Details below: </u>
            </h2>
        </div>
      <form>
  <div className="mb-3 mt-3">
    <label for="companyname" className="form-label">Company Name:</label>
    <input type="text" className="form-control" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label for="postingplace" className="form-label">Place of posting:</label>
    <input type="text" className="form-control"/>
  </div>
  <div className="mb-3">
    <label for="postingplace" className="form-label">Place of posting:</label>
    <input type="text" className="form-control"/>
  </div>
  <div className="mb-3">
    <label for="batch" className="form-label">Batch:</label>
    <input type="number" className="form-control"/>
  </div>
  <div className="mb-3">
    <label for="stipend" className="form-label">CTC/Stipend:</label>
    <input type="number" className="form-control"/>
  </div>
  <div className="mb-3">
    <label for="cgpa" className="form-label">CGPA:</label>
    <input type="number" className="form-control"/>
  </div>
  <div className="mb-3">
    <label for="category" className="form-label">Category:</label>
    <input type="number" className="form-control"/>
  </div>
  <div className="mb-3">
    <label for="allowed" className="form-label">Allowed Branches:</label>
    <input type="text" className="form-control"/>
  </div>
  <div className="mb-3">
    <label for="lastdate" className="form-label">Registration Last Date:</label>
    <input type="text" className="form-control"/>
  </div>
<br /><br />
  <button type="submit" className="btn btn-dark">Add Company</button>
</form>
    </div>
  )
}
