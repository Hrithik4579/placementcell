import logo from './logo.svg';
import './App.css';
import Slogin from './components/Slogin';
import Login from './components/Login';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Ahome from './components/Ahome';
import Addstudent from './components/Addstudent';
import Addcompany from  './components/Addcompany';
function App() {
  return (
    <div>
      <Router>
          <div className="container">
            <Routes>
              <Route exact path="/" element={<Login/>} />
              <Route exact path="/slogin" element={<Slogin/>} />
              <Route exact path="/home" element={<Ahome/>}/>
              <Route exact path="/addstudent" element={<Addstudent/>}/>
              <Route exact path="/addcompany" element={<Addcompany/>}/>
            </Routes>
          </div>
        </Router>
    </div>
  );
}

export default App;
