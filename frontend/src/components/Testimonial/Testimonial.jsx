import React from 'react';
import './Testimonial.css'; // Import your CSS file

function Testimonials() {
  return (
    <div className="body-testimonial" id="review">
    <div className="section__container_testimonial">
      <div className="header_testimonial">
        <p>TESTIMONIALS</p>
        <h1>What our clients say about us.</h1>
      </div>
      <div className="testimonials__grid_testimonial">
        <div className="card_testimonial">
          <span><i className="fas fa-quote-left"></i></span>
          <p>
            I've been working with these guys for a long time and I can say that
            my house is in the perfect hands.
          </p>
          <hr />
          <img src="https://th.bing.com/th/id/OIP.ec0rLMoXSCfm-ESN-RY3GQHaLI?w=178&h=239&c=7&r=0&o=5&pid=1.7" alt="user" />
          <p className="name_testimonial">Allan Collins</p>
        </div>
        <div className="card_testimonial">
        <span><i className="fas fa-quote-left"></i></span>
          <p>
            Working with Sentry Oak is just great, every problem in my house is
            solved in a matter of days.
          </p>
          <hr />
          <img src="https://th.bing.com/th/id/OIP.ztnYHSkYm_CIewiGUq6iHgHaLR?w=178&h=271&c=7&r=0&o=5&pid=1.7" alt="user" />
          <p className="name_testimonial">Clay Washington</p>
        </div>
        <div className="card_testimonial">
        <span><i className="fas fa-quote-left"></i></span>
          <p>
            Once a pipe burst in my kitchen and an hour later it was already
            repaired, thanks to Sentry Oak.
          </p>
          <hr />
          <img src="https://th.bing.com/th/id/OIP.NKSL5xUZ-c5AF1_DDMuZ7AHaLH?rs=1&pid=ImgDetMain" alt="user" />
          <p className="name_testimonial">Tanya Grant</p>
        </div>
      </div>
      <div className="footer_testimonial">
        <h4>No two homes are alike!</h4>
        <p>
          Our Elite network, combined with your personal needs, allows us to
          create a home plan specifically tailored to you.
        </p>
        <button>GET A QUOTE</button>
      </div>
    </div>
    </div>
  );
}

export default Testimonials;
