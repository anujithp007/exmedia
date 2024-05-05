import React from "react";
import "../styles/serviceSection.css";
import img1 from "../assets/product.jpg";
import img2 from "../assets/promotion.jpg";
import img3 from "../assets/logodesigner.jpg";
import img4 from "../assets/future.jpg";
import img5 from "../assets/webdesign.jpg";

const ServiceSection = () => {
  return (
    <div id="service" className="serviceSection">
      <div className="service">
        <div className="serviceContent">
          <h2>VISUALIZE CONCEPTS & TRANSFORM THE BUSINESS TO SUCCESS</h2>
          <p>
            With years of experience under my belt, I specialize in crafting
            unique and compelling online identities that drive results
          </p>
        </div>

        <div className="serviceItem">
          <h3>Product & Model Photography</h3>
          <div className="serviceImg hover14">
            <figure>
              <img className="w-fit rounded-lg" src={img1} alt="" />
            </figure>
          </div>
          <div className="serviceDetails">
            <div className="br"></div>
            <p>
              capturing product essence with skillfull visuals for effective
              marketing input . Product photography expertly captures items,
              enhancing their appeal through ighting composition
            </p>
          </div>
        </div>

        <div className="serviceItem">
          <h3>Bussiness Strategy Development</h3>
          <div className="serviceImg hover14">
            <figure>
              <img src={img2} className="rounded-lg" alt="" />
            </figure>
          </div>
          <div className="serviceDetails">
            <div className="br"></div>
            <p>
              We Can formulate comprehensive plans that define a company's
              goals, tactics, and direction, guiding decisions to achieve
              sustainable growth and competitive advantage.
            </p>
          </div>
        </div>

        <div className="serviceItem">
          <h3>Branding Graphics.</h3>
          <div className="serviceImg hover14">
            <figure>
              <img src={img3} className="rounded-lg" alt="" />
            </figure>
          </div>
          <div className="serviceDetails">
            <div className="br"></div>
            <p>
              Brand graphics infuse visual identity into logos, designs, and
              visuals, building recognition and resonating with audiences. Vital
              for conveying brand values and fostering consistent connections
            </p>
          </div>
        </div>
        <div className="serviceItem">
          <h3>Market Reserch And Analytics.</h3>
          <div className="serviceImg hover14 ">
            <figure>
              <img src={img4} className="rounded-lg" alt="" />
            </figure>
          </div>
          <div className="serviceDetails">
            <div className="br"></div>
            <p>
              exmedia will do Market research and analytics involving
              collecting, analyzing, and interpreting data to gain insights into
              consumer behaviors and market trends, aiding informed business
              decisions and strategy refinement.
            </p>
          </div>
        </div>
        <div className="serviceItem">
          <h3>Web And APP Development.</h3>

          <div className="serviceImg hover14">
            <figure>
              <img src={img5} className="rounded-lg" alt="" />
            </figure>
          </div>
          <div className="serviceDetails">
            <div className="br"></div>
            <p>
              It allows them to reach a larger audience, engage with potential
              customers in a more personalized way.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
