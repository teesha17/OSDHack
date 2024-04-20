import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Track.css"

function OrderCard() {
  return (
    <div className="container">
      <div className="card">
        <div className="card-header"> My Orders / Tracking </div>
        <div className="card-body">
          <h6>Order ID: OD45345345435</h6>
          <div className="card">
            <div className="card-body row">
              <div className="col"> <strong>Estimated Delivery time:</strong> <br />29 nov 2019 </div>
              <div className="col"> <strong>Shipping BY:</strong> <br /> BLUEDART, | <i className="fa fa-phone"></i> +1598675986 </div>
              <div className="col"> <strong>Status:</strong> <br /> Picked by the courier </div>
              <div className="col"> <strong>Tracking #:</strong> <br /> BD045903594059 </div>
            </div>
          </div>
          <div className="track">
            <div className="step active"> <span className="icon"> <i className="fa fa-check"></i> </span> <span className="text">Order confirmed</span> </div>
            <div className="step active"> <span className="icon"> <i className="fa fa-user"></i> </span> <span className="text"> Picked by courier</span> </div>
            <div className="step"> <span className="icon"> <i className="fa fa-truck"></i> </span> <span className="text"> On the way </span> </div>
            <div className="step"> <span className="icon"> <i className="fa fa-box"></i> </span> <span className="text">Ready for pickup</span> </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-md-4">
              <figure className="itemside mb-3">
                <div className="aside"><img src="https://i.imgur.com/iDwDQ4o.png" className="img-sm border" alt="Dell Laptop" /></div>
                <figcaption className="info align-self-center">
                  <p className="title">Dell Laptop with 500GB HDD <br /> 8GB RAM</p> <span className="text-muted">$950 </span>
                </figcaption>
              </figure>
            </div>
            <div className="col-md-4">
              <figure className="itemside mb-3">
                <div className="aside"><img src="https://i.imgur.com/tVBy5Q0.png" className="img-sm border" alt="HP Laptop" /></div>
                <figcaption className="info align-self-center">
                  <p className="title">HP Laptop with 500GB HDD <br /> 8GB RAM</p> <span className="text-muted">$850 </span>
                </figcaption>
              </figure>
            </div>
            <div className="col-md-4">
              <figure className="itemside mb-3">
                <div className="aside"><img src="https://i.imgur.com/Bd56jKH.png" className="img-sm border" alt="ACER Laptop" /></div>
                <figcaption className="info align-self-center">
                  <p className="title">ACER Laptop with 500GB HDD <br /> 8GB RAM</p> <span className="text-muted">$650 </span>
                </figcaption>
              </figure>
            </div>
          </div>
          <hr />
          <a href="#" className="btn btn-warning" data-abc="true"> <i className="fa fa-chevron-left"></i> Back to orders</a>
        </div>
      </div>
    </div>
  );
}

export default OrderCard;
