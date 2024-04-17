import React from 'react';
import '@fortawesome/fontawesome-free/css/all.css';

import "./People.css"

function ProfileCards() {
  return (
    <div className="body_people">
    <div className="container_people">
      <div className="box_people">
        <div className="image_people">
          <img src="img1.jpeg" alt="" />
        </div>
        <div className="name_job_people">David Chrish</div>
        <div className="rating_people">
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="far fa-star"></i>
          <i className="far fa-star"></i>
          <i className="far fa-star"></i>
        </div>
        <p>Lorem ipsum dolor sitamet, stphen hawkin so adipisicing elit.Rationedisujadoloremque reiciendi nemoLorem ipsum dolor sitamet</p>
        <div className="btns_people">
          {/* <button>Read More</button>
          <button>Subscribe</button> */}
        </div>
      </div>
      <div className="box_people">
        <div className="image_people">
          <img src="img2.jpeg" alt="" />
        </div>
        <div className="name_job_people">Kristina Bellis</div>
        <div className="rating_people">
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="far fa-star"></i>
          <i className="far fa-star"></i>
        </div>
        <p>Lorem ipsum dolor sitamet, stphen hawkin so adipisicing elit.Rationedisujadoloremque reiciendi nemoLorem ipsum dolor sitamet</p>
        <div className="btns_people">
          {/* <button>Read More</button>
          <button>Subscribe</button> */}
        </div>
      </div>
      <div className="box_people">
        <div className="image_people">
          <img src="img3.jpeg" alt="" />
        </div>
        <div className="name_job_people">Stephen Marlo</div>
        <div className="rating_people">
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="far fa-star"></i>
        </div>
        <p>Lorem ipsum dolor sitamet, stphen hawkin so adipisicing elit.Rationedisujadoloremque reiciendi nemoLorem ipsum dolor sitamet</p>
        <div className="btns_people">
          {/* <button>Read More</button>
          <button>Subscribe</button> */}
        </div>
      </div>
    </div>
    </div>
  );
}

export default ProfileCards;
