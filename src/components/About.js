import React, { useState } from "react";
import "../styles/About.css";
import picture from "../images/profile2.jpg";
import { motion } from "framer-motion";
import moment from "moment";
import { now } from "moment";
function About() {
  // const getDate = () => {
  //   let startMonth = 7
  //   let startYear = 2021
  //   let dateNow = new Date()
  //   let nowMonth = dateNow.getMonth() +1;
  //   let nowYear = dateNow.getFullYear();
  //   let yearExp = (nowYear - startYear)
  //   let monthExp = ((startMonth-(yearExp*12))-nowMonth)*-1
  //   let experience;
  //   if (monthExp > 12) {
  //     experience = `${yearExp} year(s) ago and ${(monthExp-(yearExp*12))} months`
  //   } else {

  //   }
  //   return experience
  // }
  // const getDate = () => {
  //   const timeElapsed = Date.now();
  //   const today = new Date(timeElapsed);
  //   today.toLocaleDateString();
  //   let started = new Date("06/30/2022");
  //   var startMonth = started.getFullYear() * 12 + started.getMonth();
  //   var endMonth = today.getFullYear() * 12 + today.getMonth();
  //   var monthInterval = endMonth - startMonth;

  //   var yearsOfExperience = Math.floor(monthInterval / 12);
  //   var monthsOfExperience = monthInterval % 12;
  //   return monthsOfExperience;
  // };
  const getDateYear = () => {
    return moment("20220630", "YYYYMMDD").fromNow();
  };

  const getYear = getDateYear();
  return (
    <div className="about-wrapper" id="about-section">
      <div className="about-container">
        <div className="about-image">
          <img src={picture} alt="about" />
        </div>
        <div className="about-text-wrapper">
          <div className="about-text-title">About Me</div>
          <div className="about-text-content">
            I am a Front-End Developer with an arsenal of skills - HTML, CSS,
            JavaScript, React.
            <br />I have started my journey {getYear}
            <br />
            My passion is working on projects and watch how mockups transforms
            into a functional and beautiful websites.
            <br />I am self-taught so I am capable of accquiring new skills
            easily and quickly.
            <br />
            Sometimes I can work on a project for 12 hours straight without
            noticing how the time flew by - thats how I know I love what I do.
            <br />I was born and raised in Israel, and moved to Denmark to be
            with my loved one.
            <br />I am fluent in English and Hebrew, I know a little bit of
            Danish.
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
