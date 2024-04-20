import React from "react";
import "@fortawesome/fontawesome-free/css/all.css";

import "./Services.css";
const ServicesSection = () => {
  return (
    <section className="section__container service__container" id="service">
      <p className="section__subheader">Our Services</p>
      <h2 className="section__header">What We Do?</h2>
      <p className="section__description">
        A one-stop solution for your home building journey. Revolutionizing the
        Home Building Process
      </p>
      <div className="service__grid">
        <div className="service__card">
          <span>
            <i className="fas fa-desktop"></i>
          </span>
          <h4> Pro-Finder</h4>
          <p>Profiles of vetted professionals for easy hiring</p>
        </div>
        <div className="service__card">
          <span>
            <i className="fas fa-shopping-cart"></i>
          </span>
          <h4> Secure Docs</h4>
          <p>Secure Docs Document management with blockchain security</p>
        </div>
        <div className="service__card">
          <span>
            <i className="fas fa-mobile-alt"></i>
          </span>
          <h4>    Vision 3D</h4>
          <p>
    
3D model visualizer for project design
          </p>
        </div>
        <div className="service__card">
          <span>
            <i className="fas fa-pen"></i>
          </span>
          <h4> Move-Map</h4>
          <p>
         
Live tracking of movers and packers on Google Maps

          </p>
        </div>
        {/* <div className="service__card">
                    <span><i className="fas fa-chart-line"></i></span>
                    <h4>SEO</h4>
                    <p>
                        Our SEO strategies are tailored to your specific goals, helping you
                        reach your target audience and grow your online presence.
                    </p>
                </div>
                <div className="service__card">
                    <span><i className="fas fa-bullhorn"></i></span>
                    <h4>Digital Marketing</h4>
                    <p>
                        From pay-per-click (PPC) advertising to social media marketing, we
                        ensure your brand stands out in the crowded digital landscape.
                    </p>
                </div> */}
      </div>
    </section>
  );
};

export default ServicesSection;
