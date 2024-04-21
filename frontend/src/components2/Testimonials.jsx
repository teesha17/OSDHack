import React from 'react';
import "./Testimonials.css";

const Testimonials = ({ testimonials }) => {
  return (
    <div className="testimonials">
      <h1>Client Testimonials</h1>
      {testimonials.map((testimonial, index) => (
        <div key={index} className="testimonial">
          <img
            src={testimonial.profilePicture}
            alt={testimonial.name}
            className="profile-picture"
          />
          <div className="testimonial-details">
            <div className="wow-div">
            <h3>{testimonial.name}</h3>
            <div className="ratings">
              {/* Render stars based on rating */}
              {Array.from({ length: testimonial.rating }, (_, i) => (
                <span key={i}>&#9733;</span>
              ))}
            </div>
            
            </div>
            <div className="review"><div>{testimonial.feedback}</div></div>
          </div>
          
        </div>
      ))}
    </div>
  );
};

export default Testimonials;
