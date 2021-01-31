import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container">
        <h3 className="navbar-header fw-bold" style={{color: "#0000FF"}}>Grades</h3>
        <ul className="nav justify-content-end">
          <Link to="/our-grades"><li className="nav-item nav-link">Home</li></Link>
          <Link to="/our-grades/18-277"><li className="nav-item nav-link">18-277</li></Link>
          <Link to="/our-grades/18-086"><li className="nav-item nav-link">18-086</li></Link>
          <Link to="/our-grades/18-117"><li className="nav-item nav-link">18-117</li></Link>
          <Link to="/our-grades/18-236"><li className="nav-item nav-link">18-236</li></Link>
          <Link to="/our-grades/18-396"><li className="nav-item nav-link">18-396</li></Link>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
