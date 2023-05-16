import React, { useEffect, useRef } from "react";
import "../styles/Projects.css";
import ProjectData from "../data/ProjectData";
import {
  motion,
  useInView,
  useAnimation,
  AnimatePresence,
  LayoutGroup,
} from "framer-motion";

function Projects() {
  return (
    <div className="projects-wrapper"  id='projects-section'>
      <ul className="projects-grid-wrapper">
        {ProjectData.map((project) => {
          return (
              <motion.li
                key={Math.floor(Math.random())}
                variants={{
                  hidden: { opacity: 0, x: 100 },
                  visible: { opacity: 1, x: 0 },
                }}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 1.5, delay: 0.25 }}
                viewport={{once: true}}
                className="projects-grid-box"
              >
                <div className="grid-box-image-container">
                  <a href={project.url} target="_blank">
                    <img
                      src={`${process.env.PUBLIC_URL}/images/${project.image}`}
                      alt={project.name}
                    />
                  </a>
                </div>
                <div className="grid-box-text-container">
                  <a href={project.url} target="_blank">
                    <h1 className="grid-box-project-title">{project.name}</h1>
                  </a>
                  <p className="grid-box-project-description">
                    {project.description}
                  </p>
                  <ul className="grid-box-project-tech-list">
                    {project.tech.map((item) => {
                      return (
                        <li className="grid-box-project-tech-item">{item}</li>
                      );
                    })}
                  </ul>
                  <div className="grid-box-project-links">
                    <a href={project.url} target="_blank">
                      <span className="grid-box-project-url">Live Demo</span>
                    </a>
                    {project.source_url ? (
                      <a href={project.source_url} target="_blank">
                        <span className="grid-box-project-url">
                          Source Code
                        </span>
                      </a>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </motion.li>
          );
        })}
      </ul>
    </div>
  );
}

export default Projects;
