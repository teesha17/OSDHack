import React, { useState } from 'react';
import { StarRating } from './StarRating';
import './ArcitectPage.css'; // Import CSS file for styling
import TwitterIcon from './twitter.png';
import InstagramIcon from './instagram.jpg';
import LinkedInIcon from './linkedin.png';
import FacebookIcon from './pinterest.png';
import PinterestIcon from './facebook.png';

const ArcitectPage = ({ user }) => {
    const [activeTab, setActiveTab] = useState('details');
    const [mainImage, setMainImage] = useState(user.image);
  
    const handleTabClick = (tab) => {
      setActiveTab(tab);
    };
  
    const handleThumbnailClick = (image) => {
      setMainImage(image);
    };

  return (
    <>
    <div className='main'>
    <div className="card">
        <div className="thumbnail-container">
        {user.thumbnailImages.map((thumbnail, index) => (
          <><img
            key={index}
            src={thumbnail}
            alt={`Thumbnail ${index + 1}`}
            className="thumbnail"
            on={() => handleThumbnailClick(thumbnail)} />
            <div></div></>
        ))}
        </div>
        <div className="main-image-container">
          <img src={mainImage} alt="Main" className="main-image" />
        </div>
        <div className="button-container">
          <button className="quote-button"> Price</button>
          <button className="message-button">Message</button>
        </div>
    </div>
    <div className="card1">  
      <div className="tab" style={{margin: "40px"}}>
        <button className={activeTab === 'details' ? 'active' : ''}
          onClick={() => handleTabClick('details')}
        >
          Details
        </button>
        <button className={activeTab === 'moreinfo' ? 'active' : ''}
          onClick={() => handleTabClick('moreinfo')}
        >
          More Info
        </button>
      </div>
      {/* <div style={{height: "0px",width:"70%",border:"solid black 1px",margin:"0px 0px 0px 30px ",float:"left"}}></div> */}
      
      <div className="card-content">
        {activeTab === 'details' && (
          <div>
            <div style={{display: "flex", alignItems:"flex-start",justifyContent: "space-around"}}>
              <p style={{margin: "0px",fontSize:"45px"}}> {user.name}
                <p style={{margin: "0px",fontSize:"15px"}}>Profession: Architect</p>
                <p style={{margin: "0px",fontSize:"15px"}}>Location: {user.location}</p>
              </p>
              <img src={user.image} alt="User" className="badge" />
            </div>
            
            <div style={{margin: "0.8rem"}}><StarRating rating={user.ratings}/></div>
            <p style={{textAlign:"start", margin: "5px 30px 0px 2.86rem"}}>Description: {user.description}</p>
          </div>
        )}
        {activeTab === 'moreinfo' && (
          <div>
            <h2>More Info</h2>
          </div>
        )}
      </div>
      <div className="card3">
        <div className="matrix">
          <div className="item">
            <h3>Experience</h3>
            <p>{user.experience} Yrs</p>
          </div>
          <div className="item">
            <h3>Projects</h3>
            <p>{user.projects}</p>
          </div>
          <div className="item">
            <h3>Awards</h3>
            <p>{user.awards}</p>
          </div>
          <div className="item">
            <h3>University</h3>
            <p>{user.education}</p>
          </div>
        </div>
          <div style={{fontSize:"1.3rem",margin:"1.7rem 0 0.7rem 0"}}>Checkout My work on:</div>
          <div className='abcd'>
            <a href={user.projectLink}/>
          </div>
          <div className="social-icons" >
            <a href={user.twitter} target="_blank" rel="noopener noreferrer">
            <img src={TwitterIcon} alt="Twitter" />
            </a>
            <a href={user.instagram} target="_blank" rel="noopener noreferrer">
            <img src={InstagramIcon} alt="Instagram" />
            </a>
            <a href={user.linkedin} target="_blank" rel="noopener noreferrer">
              <img src={LinkedInIcon} alt="LinkedIn" />
            </a>
            <a href={user.linkedin} target="_blank" rel="noopener noreferrer">
              <img src={PinterestIcon} alt="LinkedIn" />
            </a>
            <a href={user.linkedin} target="_blank" rel="noopener noreferrer">
              <img src={FacebookIcon} alt="LinkedIn" />
            </a>
          </div>
        
      </div>
    </div>
    </div>
    </>
  );
};

export default ArcitectPage;
