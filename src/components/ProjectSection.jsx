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
                <ul className="list-disc pl-2">
    <li>Product Photography</li>
    <li>VFX Effects</li>
    <li>Chroma Effect</li>
    <li>Model Photography</li>
    <li>Video Capturing</li>
    <li>High-Quality Photographs & Videos</li>
    <li>Digital Effects</li>
    <li>Dolby Effects</li>
    <li>Video Editing</li>
    <li>Video Mixing</li>
    <li>Sound Effects</li>
  </ul>
             
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

              <ul className="list-disc  pl-2">
              <li>Product photography</li>
  <li>VFX effect</li>
  <li>Chroma effect</li>
  <li>Model photography</li>
  <li>Video capturing</li>
  <li>High-quality photographs & videos</li>
  <li>Digital and Dolby effects</li>
  <li>Video editing</li>
  <li>Video mixing</li>
  <li>Sound effect</li>
  <li>VFX effect</li>
  <li>Chroma effect</li>

    </ul>
             
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
              <ul className="list-disc pl-2">
    <li>Create a Distinctive Logo</li>
    <li>Know Your Target Audience</li>
    <li>Market Research and Insights</li>
    <li>Innovative Creativity</li>
    <li>Client-Centric Approach</li>
    <li>Integrated Campaigns</li>
    <li>Collaborative Partnerships</li>
    <li>Talent Development</li>
    <li>Measurement and Optimization</li>
    <li>Develop a Consistent Visual Identity</li>
    <li>Craft a Compelling Brand Story</li>
    <li>Engage on Social Media</li>
  </ul>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
