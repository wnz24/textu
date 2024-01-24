import React from "react";
// import "./Navbar.scss"
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          TextU
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
              Home
              </Link>
            </li> 
              

             <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/About">
                {props.aboutText}
                About
              </Link>
            </li>
          </ul>
          {/* <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              ></input>
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form> */}
            </div>
            {/* <div className={`App ${Colormode}`}>            
       <div className="color-palette">
        <div className="color-blue"
         onClick={props.ColorClick}></div>
        <div className="color-green"
         onClick={props.ColorClick}></div>
        <div className="color-orange"
         onClick={props.ColorClick}></div>
        <div className="color-red"
         onClick={props.ColorClick}></div>
        <div className="color-purple"
         onClick={props.ColorClick}></div>
           
      </div></div> */}
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              onClick={props.toggelMode}
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
            ></input>
            <label className={`form-check-label text-${props.mode ==='light'?'dark':'light'}`}  htmlFor="flexSwitchCheckDefault">
              Select Mode
            </label>
          </div>
        </div>
      
    </nav>
  );
}
