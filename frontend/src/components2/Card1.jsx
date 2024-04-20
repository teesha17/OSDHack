import "@coreui/coreui/dist/css/coreui.min.css";

import { CCarouselItem } from "@coreui/react";
import { CCarousel } from "@coreui/react";
import { CImage } from "@coreui/react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Card1.css";
export const Card1 = ({ data }) => {
  return (
    <div className="BX">
      <div className="He">
        <CCarousel className="carousel" controls>
          <CCarouselItem>
            <CImage className="d-block w-100" src={data.image1} alt="slide 1" />
          </CCarouselItem>
          <CCarouselItem>
            <CImage className="d-block w-100" src={data.image2} alt="slide 2" />
          </CCarouselItem>
          <CCarouselItem>
            <CImage className="d-block w-100" src={data.image3} alt="slide 3" />
          </CCarouselItem>
        </CCarousel>
      </div>
      <div>
        <h6>{data.name}</h6>
      </div>
      <div className="BICH">
        <div className="in">
          <img src={data.profimg} />
        </div>
        <div className="inn">
          <h6>Experience: {data.experience}</h6>
        </div>
      </div>
      <div className="BX2">
        <button className="BT">CONTACT</button>
        <button className="BT">DUMMY</button>
      </div>
    </div>
  );
};

export default Card1;
