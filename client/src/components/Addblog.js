import React from 'react'
import './Addblog.css';
import Anavbar from './Anavbar';
export default function Addblog() {
  return (
    <div>
        <Anavbar/>
    <div className="container-fluid">
        <div className="row justify-content-center">
    <div className="col-12 col-md-8 glass-container">
    <div className="mt-1 nav d-flex justify-content-center">
        <h2>ENTER BLOG</h2>
            </div>
            <form >
              <div className="row">
                <div className="col-md-6">
                  <div className="mb-2">
                    <label htmlFor="companyname" className="form-label">
                      Company Name:
                    </label>
                    <input
                      name="companyname"
                      type="text"
                      className="form-control"
                      aria-describedby="emailHelp"
                    />
                  </div>
                  <div className="mb-2">
                    <label htmlFor="postingplace" className="form-label">
                      Type:
                    </label>
                    <input
                      name="postingplace"
                      type="text"
                      className="form-control"
                    />
                  </div>
                  <div className="mb-2">
                    <label htmlFor="postingplace" className="form-label">
                      Batch:
                    </label>
                    <input
                      name="postingplace"
                      type="text"
                      className="form-control"
                    />
                  </div>
                   <div className="mb-2">
                    <label htmlFor="postingplace" className="form-label">
                      Enter Blog:
                    </label>
                    <textarea
                      name="postingplace"
                      type="text"
                      className="form-control"
                      id="desc"
                    />
                  </div>
                  </div>
                  </div>
                  </form>
                  </div>
                  </div>
    </div>
    </div>
  )
}
