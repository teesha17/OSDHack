import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Boxes.scss';
import './Boxes.css';

const DashboardCard = ({ title, iconClass, value, statText }) => {
  return (
    <div className="col-12 col-md-6 col-lg-4 col-xl-3 mb-4 cardd-dash">
      <div className={`card ${iconClass}`}>
        <div className="title">{title}</div>
        <i className="zmdi zmdi-upload"></i>
        <div className="value">{value}</div>
        <div className="stat"><b>13</b>% {statText}</div>
      </div>
    </div>
  );
}


const Dashboard = () => {
    return (
      <div className="container-fluid">
        <div className="row">
          <DashboardCard title="all projects" iconClass="blue" value="89" statText="increase" />
          <DashboardCard title="team members" iconClass="green" value="5,990" statText="increase" />
          <DashboardCard title="total budget" iconClass="orange" value="$80,990" statText="decrease" />
          <DashboardCard title="new customers" iconClass="red" value="3" statText="decrease" />
        </div>
      </div>
    );
  }
export default Dashboard;
