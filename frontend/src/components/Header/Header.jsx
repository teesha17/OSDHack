// import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import "./Header.css"
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Import Bootstrap JavaScript
import React, { useRef } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

function BasicExample() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        SignUp
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item>
        <Link to="/createarchitect">Architect</Link> 
        </Dropdown.Item>
        <Dropdown.Item>
        <Link to="/createsupplier">Supplier</Link> 
        </Dropdown.Item>
        <Dropdown.Item>
        <Link to="/createpackersmovers">Packers and Movers</Link> 
        </Dropdown.Item>
        <Dropdown.Item>
        <Link to="/createcontractor">Contractor</Link> 
        </Dropdown.Item>
        <Dropdown.Item > 
        <Link to="/createuser">User</Link> 
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}



function ChatExample() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="danger" id="dropdown-basic">
        AR ROOM
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item>
        <Link to='/chat'>Chat</Link>
        </Dropdown.Item>
        <Dropdown.Item > <Link to="/arRoom">AR Room</Link> </Dropdown.Item>
        <Dropdown.Item > <Link to="/hometour">AI transformer</Link> </Dropdown.Item>
        <Dropdown.Item > <Link to="/spline">3D Models</Link> </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}


import { Link } from 'react-router-dom';
function Header() {
  return (
    <header className='headerr'>
        {/* <input type="checkbox" id="toggler" /> 
      <label htmlFor="toggler" className="fas fa-bars">
        <FontAwesomeIcon icon={faBars} /> 
      </label> */}
      <a href="#" className="logo">HomeHarbor<span>.</span></a>
      <nav className="navbar">
        <a href="#home">home</a>
        <a href="#about">about</a>
        <Link to='/products'>products</Link>
        {/* <a href="#products">products</a> */}
        <a href="https://teesha18.itch.io/homeharbour4?secret=sQ1ew1JH5Kva1hpVuSYBAIwEg">3d visualiser</a>
       
        <ChatExample/>
      </nav>
      <div className="icons">
      <FontAwesomeIcon icon={faHeart} className="icon" />
        <FontAwesomeIcon icon={faShoppingCart} className="icon" />
       <Link to="/dashboard"><FontAwesomeIcon icon={faUser} className="icon" /></Link> 
      <BasicExample/>
      {/* { <Link to="/signup"><FontAwesomeIcon icon={faUser} className="icon" /></Link>} */}
      </div>
    </header>
  );
}

export default Header;