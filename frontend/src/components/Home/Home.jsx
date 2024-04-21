import React from 'react';

import "./Home.css"
import { Link } from 'react-router-dom';

function HomeSection() {
  return (
    <section className="home" id="home">
      <div className="content-home">
        <h3>Homes that Match🏡</h3>
        <span> Your property, Your Choice.</span>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae laborum ut minus corrupti dolorum dolore assumenda iste voluptate dolorem pariatur.
     
        </p>
       
       <a href='#' class = 'btn1'>Build Now</a>
      </div>
    </section>
  );
}

export default HomeSection;
