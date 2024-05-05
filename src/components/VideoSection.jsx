import React from "react";
import "../styles/videoSection.css";
import vid from "../assets/aw.mp4";

const VideoSection = () => {
  return (
    <div id="about" className="videoSection">
      <div className="video">
        <div className="videoContent">
          <h2>WHO WE ARE ?</h2>
          <p>
            Since 2006, Exmedia has been a trailblazing Advertisement agency,
            driving brand success through innovation, creativity, and strategic
            excellence. With an illustrious history, we've honed our craft to
            deliver impactful campaigns that transcend conventional boundaries.
          </p>
        </div>

        <div className="videoBox">
          <video src={vid} muted autoPlay loop></video>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
