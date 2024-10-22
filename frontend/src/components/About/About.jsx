import React from 'react';
import "./About.css"
import videoo from "/house.mp4";
const AboutSection = () => {
    return (
        
        <section className="about" id="about">
            {/* <h1 className="heading"><span>about</span> us</h1> */}
            <div className="row">
                <div className="video-container">
                <video src={videoo} loop autoPlay muted></video>

                    <h3>Home Sweet Home</h3>
                </div>
               
            </div>
        </section>
        
    );
};

export default AboutSection;
