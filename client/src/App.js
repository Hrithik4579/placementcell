import logo from './logo.svg';
import './App.css';
import Slogin from './components/Slogin';
import Login from './components/Login';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Ahome from './components/Ahome';
import Addstudent from './components/Addstudent';
import Addcompany from  './components/Addcompany';
import Companyinfo from './components/Companyinfo';
import Anavbar from './components/Anavbar';
import Applyitem from './components/Applyitem';
import Shome from './components/Shome';
import Snavbar from './components/Snavbar';
import Applyinfo from './components/Applyinfo';
import Applystatus from './components/Applystatus';
function App() {
  return (
    <>
    <div>
      <Router>
          <div>
            <Routes>
              <Route exact path="/" element={<Login/>} />
              <Route exact path="/slogin" element={<Slogin/>} />
              <Route exact path="/home" element={<Ahome/>}/>
              <Route exact path="/addstudent" element={<Addstudent/>}/>
              <Route exact path="/addcompany" element={<Addcompany/>}/>
              <Route path="/company/:companyId" element={<Companyinfo/>}/>
              <Route exact path="/shome" element={<Shome/>}/>
              <Route path="/apply/:companyId" element={<Applyinfo/>}/>
              <Route exact path="/status" element={<Applystatus/>}/>
            </Routes>
          </div>
        </Router>
    </div>
    </>
  );
}

export default App;
