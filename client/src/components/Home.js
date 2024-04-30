import React from 'react'
import Navbar from './Navbar'
import './Home.css'
// import {micro} from "./micro.png"
export default function Home() {
  return (
    <div>
        <div>
      <Navbar/>
      </div>
      <div>
        <h1 className='features'>Features</h1>
      </div>
      <div>
        <div id="first">
            <h1 className='fir'>01</h1>
            <h4 className="heading">Lorem ipsum dolor sit.</h4>
            <p className="paragraph">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate,<br></br> iste voluptates tenetur temporibus accusamus obcaecati alias ea commodi quod. Doloribus?</p>
        </div>
        <div id="second">
            <h1 className="fir">02</h1>
                <h4 className="heading">Lorem ipsum dolor sit.</h4>
                <p className="paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima earum, obcaecati facilis nesciunt nemo doloribus perferendis. Eligendi asperiores sed atque, dolorum sint earum fuga distinctio?</p>
    
        </div>
        <div id="first">
            <h1 className='fir'>03</h1>
            <h4 className="heading">Lorem ipsum dolor sit.</h4>
            <p className="paragraph">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate,<br></br> iste voluptates tenetur temporibus accusamus obcaecati alias ea commodi quod. Doloribus?</p>
        </div>
        <div id="second">
            <h1 className='fir'>04</h1>
            <h4 className="heading">Lorem ipsum dolor sit.</h4>
            <p className="paragraph">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate,<br></br> iste voluptates tenetur temporibus accusamus obcaecati alias ea commodi quod. Doloribus?</p>
        </div>
        <div id="first">
            <h1 className='fir'>05</h1>
            <h4 className="heading">Lorem ipsum dolor sit.</h4>
            <p className="paragraph">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate,<br></br> iste voluptates tenetur temporibus accusamus obcaecati alias ea commodi quod. Doloribus?</p>
        </div>
      </div>
      {/* <div className='toprec'>
        <h1 className='top'>Top Recruiters</h1>
      </div> */}
      <section id="recruiters">
    <div className="container text-center">
      <h3>TOP RECRUITERS</h3>
      <div>
        <img
          src="https://i.gadgets360cdn.com/large/oracle_reuters_full_1570520864400.JPG?output-quality=80&output-format=webp"
          alt=""/>
        <img
          src="https://img.etimg.com/thumb/msid-65905312,width-300,imgsize-269627,,resizemode-4,quality-100/zomato.jpg"
          alt=""/>
        <img src="https://www.oneindia.com/img/2017/07/swiggy-19-1500443913.jpg" alt=""/>
        <img
          src="https://prnewswire2-a.akamaihd.net/p/1893751/sp/189375100/thumbnail/entry_id/1_rkna5p3b/def_height/67/def_width/200/version/100031/type/1"
          alt=""/>
        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/3/3d/Wipro_logo.svg/1200px-Wipro_logo.svg.png" alt=""/>
        <img src="https://ciotechie.com/wp-content/uploads/2019/04/4_1-3.png" alt=""/>
      </div>
      <div>
        <img
          src="https://prnewswire2-a.akamaihd.net/p/1893751/sp/189375100/thumbnail/entry_id/1_rkna5p3b/def_height/67/def_width/200/version/100031/type/1"
          alt=""/>
        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/3/3d/Wipro_logo.svg/1200px-Wipro_logo.svg.png" alt=""/>
        <img src="https://ciotechie.com/wp-content/uploads/2019/04/4_1-3.png" alt=""/>
        <img
          src="https://i.gadgets360cdn.com/large/oracle_reuters_full_1570520864400.JPG?output-quality=80&output-format=webp"
          alt=""/>
        <img
          src="https://img.etimg.com/thumb/msid-65905312,width-300,imgsize-269627,,resizemode-4,quality-100/zomato.jpg"
          alt=""/>
        <img src="https://www.oneindia.com/img/2017/07/swiggy-19-1500443913.jpg" alt=""/>

      </div>
      <div>
        <img
          src="https://i.gadgets360cdn.com/large/oracle_reuters_full_1570520864400.JPG?output-quality=80&output-format=webp"
          alt=""/>
        <img
          src="https://img.etimg.com/thumb/msid-65905312,width-300,imgsize-269627,,resizemode-4,quality-100/zomato.jpg"
          alt=""/>
        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/3/3d/Wipro_logo.svg/1200px-Wipro_logo.svg.png" alt=""/>
        <img src="https://ciotechie.com/wp-content/uploads/2019/04/4_1-3.png" alt=""/>
        <img src="https://www.oneindia.com/img/2017/07/swiggy-19-1500443913.jpg" alt=""/>
        <img
          src="https://prnewswire2-a.akamaihd.net/p/1893751/sp/189375100/thumbnail/entry_id/1_rkna5p3b/def_height/67/def_width/200/version/100031/type/1"
          alt=""/>

      </div>
    </div>
  </section>
  <footer>
    
  </footer>
    </div>
  )
}
