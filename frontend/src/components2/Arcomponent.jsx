import React from 'react'
import Header from '../../components/Header/Header';
import img from "./Imagess.jpg"
import './Arcomponent.css';
const Arcomponent = () => {
  return (
    <div className="container">
      <div className="headerss">
        <Header></Header>
        </div>
      <div className="headings"><b>Ar Corner!</b></div>
      <div className="image-container">
        <img src={img} alt="Your Image" />
      </div>
      <div className="what-to-do">
        Scan the above picture using the app to see it in real time in your phones!
      </div>
    </div>
  );
};

export default Arcomponent;