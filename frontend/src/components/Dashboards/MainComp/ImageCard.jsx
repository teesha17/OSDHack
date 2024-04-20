import React from 'react';
import './ImageCard.css'

const ImageCard = () => {
  return (
    <>
    <div className='body-cardss'>
    <ul className="main__cards">
      {/* Card 1 */}
      <li className="main__card" style={{ '--hue': 25 }}>
        <div className="main__card-image-container">
          <img src="https://images.unsplash.com/photo-1542037104857-ffbb0b9155fb?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=140&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=220" alt="" className="main__card-image" />
        </div>
        <h3 className="main__card-heading">Daman-e-Koh</h3>
        <p className="main__card-heading-sub">Pakistan</p>
        <p className="main__card-heading-type">Visit</p>
      </li>

      {/* Card 2 */}
      <li className="main__card" style={{ '--hue': 250 }}>
        <div className="main__card-image-container">
          <img src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=140&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=220" alt="" className="main__card-image" />
        </div>
        <h3 className="main__card-heading">Mahodand Lake</h3>
        <p className="main__card-heading-sub">Pakistan</p>
        <p className="main__card-heading-type">Visit</p>
      </li>

      {/* Card 3 */}
      <li className="main__card" style={{ '--hue': 231 }}>
        <div className="main__card-image-container">
          <img src="https://images.unsplash.com/photo-1519677100203-a0e668c92439?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=140&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=220" alt="" className="main__card-image" />
        </div>
        <h3 className="main__card-heading">London</h3>
        <p className="main__card-heading-sub">England</p>
        <p className="main__card-heading-type">Work</p>
      </li>
    </ul>
    </div>
    </>
  );
}

export default ImageCard;
