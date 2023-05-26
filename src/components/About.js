import React from "react";
import "../styles/About.css";
import picture from "../images/profile2.jpg";

function About() {
  return (
    <div className="about-wrapper" id='about-section'>
      
      <div className="about-container">
        <div className="about-image">
          <img src={picture} alt="about" />
        </div>
        <div className="about-text-wrapper">
          <div className="about-text-title">About Me</div>
          <div className="about-text-content">
            I am a Front-End Developer with an arsenal of skills - HTML,
            CSS, JavaScript, React.<br/>I love working on projects and watch how mockups transforms into a functional and
            beautiful websites.<br/>I am self-taught so I am capable of accquiring new
            skills easily and quickly.<br/>Sometimes I can work on a project for 12 hours straight
            without noticing how the time flew by - thats how I know I love
            what I do.<br/>I was born and raised in Israel, and moved to
            Denmark to be with my loved one.<br/>I am fluent in English and Hebrew, I know a little bit of Danish.
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
