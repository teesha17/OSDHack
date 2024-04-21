import React from 'react';
import "./Testimonials.css";

const Testimonials = ({ testimonials }) => {
  return (
    <div className="testimonials">
      <h2>Testimonials</h2>
      {testimonials.map((testimonial, index) => (
        <div key={index} className="testimonial">
          <img src={testimonial.profilePicture} alt={testimonial.name} className="profile-picture" />
          <div className="testimonial-details">
            <h3>{testimonial.name}</h3>
            <div className="ratings">
              {/* Render stars based on rating */}
              {Array.from({ length: testimonial.rating }, (_, i) => (
                <span key={i}>&#9733;</span>
              ))}
            </div>
            <p>{testimonial.feedback}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Testimonials;
