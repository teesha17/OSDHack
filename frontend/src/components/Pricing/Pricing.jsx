import React from 'react';
import './Pricing.css'; // Assuming you have a CSS file named style.css for styling
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const PricingComponent = () => {
    return (
        <div id="pricing">
            <div className="single-card">
                <div className="wrapper">
                    <h3>Free</h3>
                    <h1>0$</h1>
                    <ul>
                        <li>
                            <FontAwesomeIcon icon={faCheck} />
                            <span>Find architects</span>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faCheck} />
                            <span>2 user allowed</span>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faCheck} />
                            <span>Lorem, ipsum.</span>
                        </li>
                        <li className="disable">
                            <FontAwesomeIcon icon={faTimes} />
                            <span>Lorem, ipsum dolor.</span>
                        </li>
                        <li className="disable">
                            <FontAwesomeIcon icon={faTimes} />
                            <span>Community access</span>
                        </li>
                        <li className="disable">
                            <FontAwesomeIcon icon={faTimes} />
                            <span>Monthly status reports</span>
                        </li>
                    </ul>
                    <button>purchase</button>
                </div>
            </div>

            <div className="single-card">
                <div className="wrapper popular">
                    <h3>Gold</h3>
                    <h1>30$</h1>
                    <ul>
                        <li>
                            <i className="fas fa-check"></i>
                            <span>1TB storage</span>
                        </li>
                        <li>
                            <i className="fas fa-check"></i>
                            <span>5 user allowed</span>
                        </li>
                        <li>
                            <i className="fas fa-check"></i>
                            <span>Send up to 10GB</span>
                        </li>
                        <li>
                            <i className="fas fa-check"></i>
                            <span>Unlimited private projects</span>
                        </li>
                        <li className="disable">
                            <i className="fas fa-times"></i>
                            <span>Community access</span>
                        </li>
                        <li className="disable">
                            <i className="fas fa-times"></i>
                            <span>Monthly status reports</span>
                        </li>
                    </ul>
                    <button>purchase</button>
                </div>
            </div>

            <div className="single-card">
                <div className="wrapper">
                    <h3>Diamond</h3>
                    <h1>50$</h1>
                    <ul>
                        <li>
                            <FontAwesomeIcon icon={faCheck} />
                            <span>500GB storage</span>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faCheck} />
                            <span>2 user allowed</span>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faCheck} />
                            <span>Send up to 3GB</span>
                        </li>
                        <li className="disable">
                            <FontAwesomeIcon icon={faTimes} />
                            <span>Unlimited private projects</span>
                        </li>
                        <li className="disable">
                            <FontAwesomeIcon icon={faTimes} />
                            <span>Community access</span>
                        </li>
                        <li className="disable">
                            <FontAwesomeIcon icon={faTimes} />
                            <span>Monthly status reports</span>
                        </li>
                    </ul>
                    <button>purchase</button>
                </div>
            </div>
        </div>
    );
};

export default PricingComponent;
