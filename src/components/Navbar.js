import React from "react";
import "../styles/Navbar.css";
import { BsLinkedin, BsGithub, BsDownload } from "react-icons/bs";
import { FaGit, FaLinkedinIn, FaDownload } from "react-icons/fa";
import { SiGmail } from "react-icons/si"
import { Link } from "react-scroll";
import { hover } from "@testing-library/user-event/dist/hover";
import { render } from "react-dom";
import resume from '../data/cv.pdf'

function Navbar() {
  return (
    <div className="navbar-wrapper">
      <ul className="socials-ul">
        <a href="https://www.linkedin.com/in/daniel-cohen-dc/">
          <li className="navbar-socials-item">
            <BsLinkedin size={32} />
          </li>
        </a>
        <a href="https://github.com/unartcs/">
          <li className="navbar-socials-item">
            <BsGithub size={32} />
          </li>
        </a>
        <a href="mailto:unartcs@gmail.com">
          <li className="navbar-socials-item">
            <SiGmail size={32} />
          </li>
        </a>
      </ul>
      <ul className="navbar-ul">
        <Link
          activeClass="active"
          to="home-section"
          spy={true}
          smooth={true}
          hashSpy={true}
          offset={0}
          duration={500}
          delay={200}
          isDynamic={true}
          ignoreCancelEvents={false}
          spyThrottle={500}
        >
          <li className="navbar-ul-item">Home</li>
        </Link>
        <Link
          activeClass="active"
          to="about-section"
          spy={true}
          smooth={true}
          hashSpy={true}
          offset={0}
          duration={500}
          delay={200}
          isDynamic={true}
          ignoreCancelEvents={false}
          spyThrottle={500}
        >
          <li className="navbar-ul-item">About</li>
        </Link>
        <Link
          activeClass="active"
          to="projects-section"
          spy={true}
          smooth={true}
          hashSpy={true}
          offset={0}
          duration={500}
          delay={200}
          isDynamic={true}
          ignoreCancelEvents={false}
          spyThrottle={500}
        >
          <li className="navbar-ul-item">Projects</li>
        </Link>
        <Link
          activeClass="active"
          to="contact-section"
          spy={true}
          smooth={true}
          hashSpy={true}
          offset={0}
          duration={500}
          delay={200}
          isDynamic={true}
          ignoreCancelEvents={false}
          spyThrottle={500}
        >
          <li className="navbar-ul-item">Contact</li>
        </Link>
      </ul>

      <div className="cv-link">
        <a href={resume} download>
        <FaDownload />
        CV
        </a>
      </div>
    </div>
  );
}

export default Navbar;
