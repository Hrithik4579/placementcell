import React from "react";
import Navbar from "./Navbar";
// import Anavbar from "./Anavbar";
import { Link } from 'react-router-dom';
import Footer from './footer.js';
import "./Home.css";

// import {micro} from "./micro.png"
export default function Home() {
  return (
    <div>
      <div>
        <Navbar />
      </div>

      <div className="landing-mainpage">
        <div class="placement-container">
          <div class="placement-content">
            <h6 class="tag">
              Unlock Your Potential: Navigate Your Career with
            </h6>
            <h1 class="title big">
              <em>JIIT</em> PLACEMENT PORTAL
            </h1>
            <p>– Where Placement is Made Simple!</p>
            <Link to="/login" className="btn btn_1">
              Get hired
            </Link>
          </div>
          <div class="placement-image">
            <div className="jiitmainimg"></div>
          </div>
        </div>
      </div>

      <section>
        <div class="division_1 padding_1x">
          <section class="title_header t_center">
            <h1 class="title medium">
              <em>Hiring</em> made easy
            </h1>
          </section>
          <ul class="flex padding_2x">
            <li class="padding_1x">
              <h3 class="title small">
                STEP 1:{" "}
                <h5>
                  <em>REGISTER ACCOUNT</em>
                </h5>
              </h3>
              <p>First the admin will make students' account.</p>
            </li>
            <li class=" padding_1x">
              <h3 class="title small">
                STEP 2:{" "}
                <h5>
                  <em>FIND A JOB</em>
                </h5>
              </h3>
              <p>Search for the job you want.</p>
            </li>
            <li class="padding_1x">
              <h3 class="title small">
                STEP 3:{" "}
                <h5>
                  <em>APPLY FOR JOB</em>
                </h5>
              </h3>
              <p>Upload the resume and apply for the company.</p>
            </li>
          </ul>
        </div>
      </section>

      <section id="recruiters">
        <div className="container text-center">
          <h1 class="title medium">
            <em>TOP</em> RECRUITERS
          </h1>
          <div>
            <img
              src="https://i.gadgets360cdn.com/large/oracle_reuters_full_1570520864400.JPG?output-quality=80&output-format=webp"
              alt=""
            />
            <img
              src="https://img.etimg.com/thumb/msid-65905312,width-300,imgsize-269627,,resizemode-4,quality-100/zomato.jpg"
              alt=""
            />
            <img
              src="https://www.oneindia.com/img/2017/07/swiggy-19-1500443913.jpg"
              alt=""
            />
            <img
              src="https://prnewswire2-a.akamaihd.net/p/1893751/sp/189375100/thumbnail/entry_id/1_rkna5p3b/def_height/67/def_width/200/version/100031/type/1"
              alt=""
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/en/thumb/3/3d/Wipro_logo.svg/1200px-Wipro_logo.svg.png"
              alt=""
            />
            <img
              src="https://ciotechie.com/wp-content/uploads/2019/04/4_1-3.png"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://prnewswire2-a.akamaihd.net/p/1893751/sp/189375100/thumbnail/entry_id/1_rkna5p3b/def_height/67/def_width/200/version/100031/type/1"
              alt=""
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/en/thumb/3/3d/Wipro_logo.svg/1200px-Wipro_logo.svg.png"
              alt=""
            />
            <img
              src="https://ciotechie.com/wp-content/uploads/2019/04/4_1-3.png"
              alt=""
            />
            <img
              src="https://i.gadgets360cdn.com/large/oracle_reuters_full_1570520864400.JPG?output-quality=80&output-format=webp"
              alt=""
            />
            <img
              src="https://img.etimg.com/thumb/msid-65905312,width-300,imgsize-269627,,resizemode-4,quality-100/zomato.jpg"
              alt=""
            />
            <img
              src="https://www.oneindia.com/img/2017/07/swiggy-19-1500443913.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://i.gadgets360cdn.com/large/oracle_reuters_full_1570520864400.JPG?output-quality=80&output-format=webp"
              alt=""
            />
            <img
              src="https://img.etimg.com/thumb/msid-65905312,width-300,imgsize-269627,,resizemode-4,quality-100/zomato.jpg"
              alt=""
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/en/thumb/3/3d/Wipro_logo.svg/1200px-Wipro_logo.svg.png"
              alt=""
            />
            <img
              src="https://ciotechie.com/wp-content/uploads/2019/04/4_1-3.png"
              alt=""
            />
            <img
              src="https://www.oneindia.com/img/2017/07/swiggy-19-1500443913.jpg"
              alt=""
            />
            <img
              src="https://prnewswire2-a.akamaihd.net/p/1893751/sp/189375100/thumbnail/entry_id/1_rkna5p3b/def_height/67/def_width/200/version/100031/type/1"
              alt=""
            />
          </div>
        </div>
      </section>
      {/* <footer></footer> */}

      <div class="division_2 padding_1x">
        <section class="title_header t_center">
          <h1 class="title medium">
            We can find <em>everyone</em>, regardless of the <em>technology</em>
          </h1>
        </section>
        <section class="content flex mb-5">
          <ul class="flex_content padding_2x">
            <li class="fixed_flex small padding_2x">Front-end and mobile</li>
            <li class="fixed_flex small padding_2x">Back-end development</li>
            <li class="fixed_flex small padding_2x">DevOps and cloud</li>
          </ul>
          <figure class="flex_content">
            <img
              src="https://raw.githubusercontent.com/bharadwajyl/joblisting/main/assets/images/division_1.png"
              alt=""
              loading="lazy"
            />
          </figure>
          <ul class="flex_content padding_2x">
            <li class="fixed_flex small padding_2x">
              Data science & engineering
            </li>
            <li class="fixed_flex small padding_2x">Blockchain, web 3.0</li>
            <li class="fixed_flex small padding_2x">UI/UX Designers</li>
          </ul>
        </section>
      </div>
      <footer><Footer /></footer>
      

      
    </div>
  );
}
