import React from "react";
import "../styles/teamSection.css";
import img1 from '../assets/ad.jpg'
import img2 from '../assets/exp.svg'
import img3 from '../assets/mn.jpg'

const TeamSection = () => {
  return (
    <div id="skill" className="teamSection">
      <div className="team">
        <div className="teamContent">
          <h2>Why Choose WE ?</h2>
          <p>
            As a team, we hold the belief that we are stronger when we
            collaborate.
          </p>
        </div>

        <div className="profile">
          <div className="profilePic">
            <img
              src={img2}
              alt=""
            />
          </div>

          <div className="profileName">
            <h3>Strategy</h3>
          </div>

          <div className="profileDetails">
            <p>
             <ul className="list-disc">
              <li>Market Research and Insights</li>
              <li>Innovative Creativity</li>
              <li>Client-Centric Approach</li>
              <li>Integrated Campaigns</li>
              <li>Intreraction Design</li>
             </ul>
            </p>
          </div>
        </div>

        <div className="profile">
          <div className="profilePic">
            <img
              src={img1}
              alt=""
            />
          </div>

          <div className="profileName">
            <h3>Experience</h3>

            
          </div>

          <div className="profileDetails">
            <p>
              <ul className="list-disc">
                <li>Dynamic Creative Release </li>
                <li>Customer Trust Buildup</li>
                <li>Consistent Client Attraction</li>
                <li>Business Development</li>
                <li>Brand Identity Build </li>
              </ul>
            </p>
          </div>
        </div>

        <div className="profile">
          <div className="profilePic">
            <img
              src={img3}
              alt=""
            />
          </div>

          <div className="profileName">
            <h3>Management</h3>

          </div>
          <div className="profileDetails">
            <p>
             <ul className="list-disc">
              <li>Creative Direction</li>
              <li>Strategic Thinking</li>
              <li>Team Leadership</li>
              <li>Communication</li>
             </ul>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
