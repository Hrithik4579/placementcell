import React, { useState, useEffect } from 'react'
import Anavbar from './Anavbar';

export default function Viewblogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/blogs', {
          method: "GET",
          credentials: 'include',
          headers: {
            "Content-Type": "application/json",
          }
        });
        const json = await response.json();

        if (json.success) {
          console.log(json);
          setBlogs(json.data);
        }
        else {
          console.log("Json response unsuccessful");
        }
      } catch (error) {
        console.error('Error fetching jobs:', error);
      }
    };

    fetchBlogs();
  }, []);
  
  return (
    <div>
      <Anavbar />
      <div className='mt-4'>
        <div className="container">
          <div className="row">
            {/* {blogs.map((element)=>{
                return <div key={element._id} className="col-md-4">
                     <Blogitem cname={element.companyName} type={element.type} batch={element.batch} id={element._id}/>
                </div>
            })} */}
          </div>
        </div>

      </div>
    </div>
  )
}
