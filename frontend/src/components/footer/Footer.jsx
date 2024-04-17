import React from 'react';
import "./Footer.css"

const FooterSection = () => {
    return (
        <section className="footer">
            <div className="box-container">
                <div className="box">
                    <h3>quick links</h3>
                    <a href="#">home</a>
                    <a href="#">about</a>
                    <a href="#">products</a>
                    <a href="#">review</a>
                    <a href="#">contact</a>
                </div>
                <div className="box">
                    <h3>Extra links</h3>
                    <a href="#">my account</a>
                    <a href="#">my order</a>
                    <a href="#">my favorites</a>
                </div>
                <div className="box">
                    <h3>Locations</h3>
                    <a href="#">india</a>
                    <a href="#">USA</a>
                    <a href="#">France</a>
                    <a href="#">Japan</a>
                    <a href="#">Ukraine</a>
                </div>

                <div className="box">
                    <h3>contact info</h3>
                    <a href="#">+123-456-7890</a>
                    <a href="#">fushionflower@gmail.com</a>
                    <a href="#">Kampala, Uganda - 500203</a>
                    <img src="/images/payment.png" alt="" />
                </div>
            </div>
            
        </section>
    );
};

export default FooterSection;
