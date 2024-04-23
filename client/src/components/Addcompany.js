import React, { useRef } from 'react'
import './login.css'
import Anavbar from './Anavbar'
export default function Addcompany() {
  const formRef = useRef();

  const handleSubmit = async(event) => {
    event.preventDefault();
    const formData = new FormData(formRef.current);
    const companyData = {
      companyName: formData.get('companyname'),
      location: formData.get('postingplace'),
      batch: formData.get('batch'),
      role: formData.get('role'),
      salary: formData.get('stipend'),
      cgpa: formData.get('cgpa'),
      type: formData.get('category'),
      branches: formData.get('allowed'),
      registerBy: formData.get('lastdate')
    };

    console.log(companyData);

    try {
      const response = await fetch('http://localhost:8000/api/admin/job', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(companyData)
      });

      if (!response.ok) {
        // console.log(response.statusText);
        // console.log(response.error);
        throw new Error('Failed to add company');
      }

      alert('Company added successfully');
      formRef.current.reset();
    } catch (error) {
      console.error(error);
      alert('Failed to add company');
    } 
  };

  return (
    <div>
      <Anavbar />
      <div>
        <h2 className='mt-5'>
          <u>Enter Company Details below: </u>
        </h2>
      </div>
      <form ref={formRef} onSubmit={handleSubmit}>
        <div className="mb-3 mt-3">
          <label htmlFor="companyname" className="form-label">Company Name:</label>
          <input name="companyname" type="text" className="form-control" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label htmlFor="postingplace" className="form-label">Place of posting:</label>
          <input name='postingplace' type="text" className="form-control" />
        </div>
        <div className="mb-3">
          <label htmlFor="batch" className="form-label">Batch:</label>
          <input name='batch' type="number" className="form-control" />
        </div>
        <div className="mb-3">
          <label htmlFor="stipend" className="form-label">CTC/Stipend:</label>
          <input name='stipend' type="number" className="form-control" />
        </div>
        <div className="mb-3">
          <label htmlFor="cgpa" className="form-label">CGPA:</label>
          <input name='cgpa' type="number" className="form-control" />
        </div>
        <div className="mb-3">
          <label htmlFor="category" className="form-label">Category:</label>
          <input name='category' type="text" className="form-control" />
        </div>
        <div className="mb-3">
          <label htmlFor="category" className="form-label">Role:</label>
          <input name='category' type="text" className="form-control" />
        </div>
        <div className="mb-3">
          <label htmlFor="allowed" className="form-label">Allowed Branches:</label>
          <input name='allowed' type="text" className="form-control" />
        </div>
        <div className="mb-3">
          <label htmlFor="lastdate" className="form-label">Registration Last Date:</label>
          <input name='lastdate' type="date" className="form-control" />
        </div>
        <br /><br />
        <button type="submit" className="btn btn-dark">Add Company</button>
      </form>
    </div>
  )
}
