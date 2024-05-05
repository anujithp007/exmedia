import React from "react";
import "../styles/clientSection.css";
import img1 from "../assets/1.avif";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";

const ClientSection = () => {
  return (
    <div id="client" className="clientSection">
      <div className="client">
        <div className="clientContent">
          <h2>Clients</h2>
          <p>
            With years of experience under my belt, I specialize in crafting
            unique and compelling online identities that drive results.
          </p>
        </div>

        <div className="clients-box">
          <div className="client-box">
            <div className="">
              <img className="client-pic" src={img1} alt="" />
            </div>
            <p className="client-qoute">
              My mission is to translate your vision into a compelling online
              presence that captivates your audience.
            </p>
            <div className="client-details">
              <div className="client-name">JOHN PAUL</div>
              <div className="client-position">Pulsare Chief Designer</div>
            </div>
          </div>

          <div className="client-box">
            <div className="">
              <img className="client-pic" src={img2} alt="" />
            </div>
            <p className="client-qoute">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
              architecto quidem deserunt a! Voluptas, excepturi explicabo mi
            </p>
            <div className="client-details">
              <div className="client-name">Teresa</div>
              <div className="client-position">Pulsare Chief Designer</div>
            </div>
          </div>

          <div className="client-box">
            <div className="">
              <img className="client-pic" src={img3} alt="" />
            </div>
            <p className="client-qoute">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
              necessitatibus debitis non, blanditiis exercitationem odit ullam
              se
            </p>
            <div className="client-details">
              <div className="client-name">Christian</div>
              <div className="client-position">Pulsare Chief Designer</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientSection;
