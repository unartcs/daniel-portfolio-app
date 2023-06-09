import React, { useEffect, useRef } from "react";
import profile from "../images/profile.jpg";
import htmlIcon from "../images/html.svg";
import cssIcon from "../images/css.svg";
import jsIcon from "../images/js.svg";
import reactIcon from "../images/icons8-react.svg";
import gitIcon from "../images/icons8-github.svg";
import tailwindIcon from '../images/icons8-tailwind-css-480.png'
import "../styles/Hero.css";
import {
  motion,
  useInView,
  useAnimation,
  AnimatePresence,
  LayoutGroup,
} from "framer-motion";

// import { DiCss3, DiHtml5, DiReact, DiGit, DiJavascript } from "react-icons/di";

function Hero() {
  return (
    <div className="hero-wrapper" id="home-section">
      <div className="hero-container">
        <div className="hero-image">
          <img src={profile} alt="profile"></img>
        </div>
        <div className="hero-text-container">
          <h1>Front-end developer</h1>
          <div className="hero-text-content">
            I am Daniel Cohen,
            <br />
            <motion.li
              key={Math.floor(Math.random())}
              variants={{
                hidden: { width: '0%'},
                visible: { width: '100%', animationTimingFunction: 'step-start'}
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 2, delay: 0, animationTimingFunction: 'step-start', repeat: ''}}
              viewport={{once: false}}
              className="animated-text">
              a passionate web developer
            </motion.li>
          </div>
          <div className="hero-skills-content">
            <div className="skill-wrapper">
              {/* <DiHtml5 size={50} color='orange'/> */}
              <img src={htmlIcon} alt="HTML" height={"50px"} />
              HTML
            </div>
            <div className="skill-wrapper">
              {/* <DiCss3 size={50}  color='blue'/> */}
              <img src={cssIcon} alt="CSS" height={"50px"} />
              CSS
            </div>
            <div className="skill-wrapper">
              {/* <DiJavascript size={50}  color='yellow'/> */}
              <img src={jsIcon} alt="JavaScript" height={"50px"} />
              JavaScript
            </div>
            <div className="skill-wrapper">
              {/* <DiReact size={50}  color='cyan'/> */}
              <img src={reactIcon} alt="React" height={"50px"} />
              React
            </div>
            <div className="skill-wrapper">
              {/* <DiReact size={50}  color='cyan'/> */}
              <img src={tailwindIcon} alt="Tailwind" height={"50px"} />
              Tailwind
            </div>
            <div className="skill-wrapper">
              {/* <DiGit size={50}/> */}
              <img src={gitIcon} alt="GitHub" height={"50px"} />
              GitHub
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
