import React, {useRef} from 'react'
import './Addblog.css';
import Anavbar from './Anavbar';
export default function Addblog() {
    const formRef = useRef();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(formRef.current);
    const companyData = {
      companyName: formData.get("companyname"),
      type: formData.get( "type" ),
      batch: formData.get("batch"),
      desc: formData.get("blog"),
    };

    console.log(companyData);

    try {
      const response = await fetch("http://localhost:8000/api/blogs", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(companyData),
      });

      if (!response.ok) {
        // console.log(response.statusText);
        // console.log(response.error);
        throw new Error("Failed to add company");
      }

      alert("Blog added successfully");
      formRef.current.reset();
    } catch (error) {
      console.error(error);
      alert("Failed to add Blog");
    }
  };
  return (
    <div className='addblog'>
        <Anavbar/>
    <div className="container-fluid">
        <div className="row justify-content-center">
    <div className="col-12 col-md-8 glass-container">
    <div className="mt-1 nav d-flex justify-content-center">
        <h2>ENTER BLOG</h2>
            </div>
            <form ref={formRef} onSubmit={handleSubmit}>
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
                      name="type"
                      type="text"
                      className="form-control"
                    />
                  </div>
                  <div className="mb-2">
                    <label htmlFor="postingplace" className="form-label">
                      Batch:
                    </label>
                    <input
                      name="batch"
                      type="text"
                      className="form-control"
                    />
                  </div>
                   <div className="mb-2">
                    <label htmlFor="postingplace" className="form-label">
                      Enter Blog:
                    </label>
                    <textarea
                      name="blog"
                      type="text"
                      className="form-control"
                      id="desc"
                    />
                  </div>
                  </div>
                  </div>
                  <div className="text-center">
                <button type="submit" className="btn btn-dark btn-lg mt-2">
                  Add Blog
                </button>
              </div>
                  </form>
                  </div>
                  </div>
    </div>
    </div>
  )
}
