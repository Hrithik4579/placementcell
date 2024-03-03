import logo from './logo.svg';
import './App.css';
import Slogin from './components/Slogin';
import Login from './components/Login';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
          <div className="container">
            <Routes>
              <Route exact path="/" element={<Login/>} />
              <Route exact path="/slogin" element={<Slogin/>} />

            </Routes>
          </div>
        </Router>
    </div>
  );
}

export default App;
