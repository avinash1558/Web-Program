import React from "react";
import "./Navbar.css";
// import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <>
      <div className="NavBoxMain">
        <div className="NavBox">
          <div className="Navhead">
            <div className="Navheadtext">{props.Navhead}</div>
          </div>
          <ul className="Navitems">
            <li className="Navitem" id="home">
              {/* <Link to="/">{props.home}</Link> */}
              {props.home}
          
            </li>
            <li className="Navitem" id="about">
              {/* <Link to="/about">{props.about}</Link> */}
              {props.about}
              
            </li>
            <li className="Navitem" id="skill">
              {/* <Link to="/skill">{props.skill}</Link> */}
              {props.skill}             
            </li>
            <li className="Navitem" id="project">
              {/* <Link to="/project">{props.project}</Link> */}
              {props.project}
              
            </li>
            <li className="Navitem" id="contact">
              {/* <Link to="/contact">{props.contact}</Link> */}
              {props.contact}
              
            </li>
          </ul>
          
        </div>
      </div>
    </>
  );
}
