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
            I am a junior Front-End Developer with an arsenal of skills - HTML,
            CSS, JavaScript, React.<br/>I love working on projects - designing &
            developing, and watch how a mockup transforms into a functional and
            beautiful website.<br/>I am self-taught so I am capable of accquiring new
            skills easily and quickly.<br/>My expertise are dedication and
            commitment, and I am a great team player!<br/>Sometimes I can work on a project for 12 hours straight
            without noticing how the time flies by, thats how I know that I love
            what I am doing.<br/>I was born and raised in Israel, and moved to
            Denmark to be with my loved one.<br/>I am fluent in English, my native
            Language is Hebrew and I know a little bit of Danish.
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
