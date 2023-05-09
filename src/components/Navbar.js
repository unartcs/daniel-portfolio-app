import React from "react";
import "../styles/Navbar.css";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import {FaGit, FaLinkedinIn} from 'react-icons/fa'

function Navbar() {
  return (
    <div className="navbar-wrapper">
      <ul className="navbar-ul">
        <li className="navbar-ul-item">Home</li>
        <li className="navbar-ul-item">About</li>
        <li className="navbar-ul-item">Projects</li>
        <li className="navbar-ul-item">Contact</li>
      </ul>
      <ul className="socials-ul">
        <li className="navbar-socials-item">
          
          <BsLinkedin size={32}/>
        </li>
        <li className="navbar-socials-item">
          <BsGithub size={32} />
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
