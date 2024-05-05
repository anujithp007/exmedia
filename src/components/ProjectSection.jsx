import React from "react";
import "../styles/projectSection.css";
import studio from "../assets/studio.jpg";
import robotics from "../assets/robotic.jpg";
import branding from "../assets/branding.jpg";

const ProjectSection = () => {
  return (
    <div id="project" className="projectSection">
      <div className="project">
        <div className="projectContent">
          <h2>What We Do?</h2>
          <p>
            Step into the dynamic realm of Exmedia Studio, where imagination and
            innovation converge to create captivating narratives that transcend
            boundaries.
          </p>
        </div>

        <div className="projects-box">
          <div className="project-box">
            <div className="project-vid swing vid1">
              <img src={studio} alt="" />
            </div>
            <div className="project-details">
              <div className="project-title">Studio</div>
              <p className="project-description">
                ELEVATE YOUR IMPACTS & CONNECT BRANDS WITH CUSTOMERS.
              </p>
              <a href="" className="project-link">
                Details
              </a>
            </div>
          </div>

          <div className="project-box rev">
            <div className="project-vid swing">
              <img src={robotics} alt="" />
            </div>
            <div className="project-details">
              <div className="project-title">Designing</div>
              <p className="project-description">
                {" "}
                DESIGNS THAT INSPIRE, CONNECT, AND LEAVE A LASTING IMPRESSION
              </p>
              <a href="" className="project-link">
                Details
              </a>
            </div>
          </div>

          <div className="project-box">
            <div className="project-vid swing">
              <img src={branding} alt="" />
            </div>
            <div className="project-details">
              <div className="project-title">Branding</div>
              <p className="project-description">
                YOUR BRAND, YOUR STORY: WE SHAPE IDENTITIES WITH IMPACT
              </p>
              <a href="" className="project-link">
                Details
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
