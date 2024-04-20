import React from 'react';
import './Testimonial.css'; // Import your CSS file

function Testimonials() {
  return (
    <div className="body-testimonial">
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
          <img src="assets/pic-1.jpg" alt="user" />
          <p className="name_testimonial">Allan Collins</p>
        </div>
        <div className="card_testimonial">
        <span><i className="fas fa-quote-left"></i></span>
          <p>
            Working with Sentry Oak is just great, every problem in my house is
            solved in a matter of days.
          </p>
          <hr />
          <img src="assets/pic-2.jpeg" alt="user" />
          <p className="name_testimonial">Clay Washington</p>
        </div>
        <div className="card_testimonial">
        <span><i className="fas fa-quote-left"></i></span>
          <p>
            Once a pipe burst in my kitchen and an hour later it was already
            repaired, thanks to Sentry Oak.
          </p>
          <hr />
          <img src="assets/pic-3.jpg" alt="user" />
          <p className="name_testimonial">Tanya Grant</p>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Testimonials;
