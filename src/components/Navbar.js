import React, { useState } from "react";
import "../styles/Navbar.css";
import { BsLinkedin, BsGithub, BsDownload } from "react-icons/bs";
import { FaGit, FaLinkedinIn, FaDownload, FaHamburger } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { SiGmail } from "react-icons/si";
import { Link } from "react-scroll";
import { hover } from "@testing-library/user-event/dist/hover";
import { render } from "react-dom";
import resume from "../data/cv.pdf";

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(true);
  const [toggleSocials, setToggleSocials] = useState(false);
  const title = "<Daniel/>";
  return (
    <div className={toggleMenu ? "navbar-wrapper" : "navbar-wrapper-close"}>
      <div
        className="hamburger-button"
        onClick={() => setToggleMenu(!toggleMenu)}
      >
        {!toggleMenu ? <FaHamburger size={32} /> : <AiOutlineClose size={50} />}
      </div>
      {toggleSocials ? (
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
      ) : (
        <span className={toggleMenu ? 'navbar-title' : 'hide'}>
          &#60;<span>Daniel</span> &#47;&#62;
        </span>
      )}
        <ul className={toggleMenu ? "navbar-ul" : 'navbar-ul close'}>
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
            <li className={toggleMenu ? "navbar-ul-item" : 'navbar-ul-item close'}>Home</li>
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
            <li className={toggleMenu ? "navbar-ul-item" : 'navbar-ul-item close'}>About</li>
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
            <li className={toggleMenu ? "navbar-ul-item" : 'navbar-ul-item close'}>Projects</li>
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
            <li className={toggleMenu ? "navbar-ul-item" : 'navbar-ul-item close'}>Contact</li>
          </Link>
        </ul>
        <div className={toggleMenu ? "cv-link" : 'cv-link close'}>
          <a href={resume} download>
            <FaDownload />
            CV
          </a>
        </div>
    </div>
  );
}

export default Navbar;
