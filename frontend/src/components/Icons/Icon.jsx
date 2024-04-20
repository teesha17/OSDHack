import React from 'react';
import "./Icon.css"
import image1 from "/icon-1.png";
import image2 from "/icon-2.png";
import image3 from "/icon-3.png";
import image4 from "/icon-4.png";

const IconsSection = () => {
    return (
        <section className="icons-container">
            <div className="icons">
                <img src={image1} alt="" />
                <div className="info">
                    <h3>Free delivery</h3>
                    <span>on all orders</span>
                </div>
            </div>

            <div className="icons">
            <img src={image2} alt="" />
                <div className="info">
                    <h3>10 days returns</h3>
                    <span>Moneyback guarantee</span>
                </div>
            </div>

            <div className="icons">
            <img src={image3} alt="" />
                <div className="info">
                    <h3>offer &amp; gifts</h3>
                    <span>on all orders</span>
                </div>
            </div>

            <div className="icons">
            <img src={image4} alt="" />
                <div className="info">
                    <h3>secure payments</h3>
                    <span>protected by paypal</span>
                </div>
            </div>
        </section>
    );
};

export default IconsSection;
