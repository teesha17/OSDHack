import React from 'react';
import "./About.css"
import videoo from "../../assets/house.mp4";
const AboutSection = () => {
    return (
        
        <section className="about" id="about">
            {/* <h1 className="heading"><span>about</span> us</h1> */}
            <div className="row">
                <div className="video-container">
                <video src={videoo} loop autoPlay muted></video>

                    <h3>Home Sweet Home</h3>
                </div>
                <div className="content">
                    <h3>why choose us?</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda nam cumque quasi autem blanditiis eaque laboriosam, neque alias sequi! Minus voluptatem expedita incidunt amet vel repellendus rem nisi minima animi?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quo illum perferendis sapiente iusto distinctio! Esse maxime laborum vero, eligendi, sint impedit nulla fugit fugiat qui harum sapiente natus cum.</p>
                    <a href="#" className="btn">Learn More</a>
                </div>
            </div>
        </section>
        
    );
};

export default AboutSection;
