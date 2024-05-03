import './App.css';
import Slogin from './components/Slogin';
import Login from './components/Login';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Ahome from './components/Ahome';
import Addstudent from './components/Addstudent';
import Addcompany from  './components/Addcompany';
import Companyinfo from './components/Companyinfo';
import Shome from './components/Shome';
import Applyinfo from './components/Applyinfo';
import Applystatus from './components/Applystatus';
import Addblog from './components/Addblog';
import Viewblogs from './components/Viewblogs';
import Applicationstatus from './components/Applicationstatus';
import Applicationinfo from './components/Applicationinfo';
import Bloginfo from './components/Bloginfo';
import Home from './components/Home';
import AViewBlogs from './components/AViewBlogs.js';
import ABloginfo from './components/ABloginfo.js';
// import Footer from './components/footer.js';


function App() {
  return (
    <>
    <div>
      <Router>
          <div>
            <Routes>
              <Route exact path="/" element={<Home/>} />
              <Route exact path="/login" element={<Login/>}/>
              <Route exact path="/slogin" element={<Slogin/>} />
              <Route exact path="/home" element={<Ahome/>}/>
              <Route exact path="/addstudent" element={<Addstudent/>}/>
              <Route exact path="/addcompany" element={<Addcompany/>}/>
              <Route path="/company/:companyId" element={<Companyinfo/>}/>
              <Route exact path="/shome" element={<Shome/>}/>
              <Route path="/apply/:companyId" element={<Applyinfo/>}/>
              <Route path="/blog/:blogId" element={<Bloginfo/>}/>
              <Route path="/ablog/:blogId" element={<ABloginfo/>}/>
              <Route exact path="/status" element={<Applystatus/>}/>
              <Route exact path="/ablog" element={<Addblog/>}/>
              <Route exact path= "/vblog" element={<Viewblogs/>}/>
              <Route exact path= "/avblog" element={<AViewBlogs/>}/>
              <Route exact path="/applications" element={<Applicationstatus/>}/>
              <Route path="/applications/:companyId" element={<Applicationinfo/>}/>
              <Route exact path="/logout" element={<Login/>}/>
            </Routes>
          </div>
        </Router>
        {/* <footer><Footer /></footer> */}

    </div>
    </>
  );
}

export default App;
