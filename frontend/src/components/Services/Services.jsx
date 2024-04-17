import React from 'react';
import '@fortawesome/fontawesome-free/css/all.css'; 

import "./Services.css"
const ServicesSection = () => {
    return (
        <section className="section__container service__container" id="service">
            <p className="section__subheader">Our Services</p>
            <h2 className="section__header">What We Do?</h2>
            <p className="section__description">
                We specialize in a wide range of web development services designed to
                transform your vision into reality.
            </p>
            <div className="service__grid">
                <div className="service__card">
                    <span><i className="fas fa-desktop"></i></span>
                    <h4>Website Design</h4>
                    <p>
                        We craft user-friendly interfaces that engage visitors and help you
                        achieve your online goals with minimum efforts.
                    </p>
                </div>
                <div className="service__card">
                    <span><i className="fas fa-shopping-cart"></i></span>
                    <h4>E-commerce Solutions</h4>
                    <p>
                        We build secure, scalable, and user-centric online stores that
                        enhance the shopping experience and drive conversions.
                    </p>
                </div>
                <div className="service__card">
                    <span><i className="fas fa-mobile-alt"></i></span>
                    <h4>Mobile Development</h4>
                    <p>
                        From iOS to Android, we create apps that deliver seamless
                        performance and keep users coming back for more.
                    </p>
                </div>
                <div className="service__card">
                    <span><i className="fas fa-pen"></i></span>
                    <h4>Content Marketing</h4>
                    <p>
                        Our services include creating blog posts, videos, and social media
                        content that drives traffic and engagement.
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
