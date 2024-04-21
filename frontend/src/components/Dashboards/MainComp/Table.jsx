import React from 'react';
import './Boxes.scss'

const ProjectTable = () => {
  return (
    <table className="projects-table">
      <thead>
        <tr>
          <th>Project</th>
          <th>Deadline</th>
          <th>Leader + Team</th>
          <th>Budget</th>
          <th>Status</th>
          <th className="text-right">Actions</th>
        </tr>
      </thead>
      <tbody>
        {/* Add your table rows here */}
        <tr>
          <td>
            <p>New Dashboard</p>
            <p>Google</p>
          </td>
          <td>
            <p>17th Oct, 15</p>
            <p className="text-danger">Overdue</p>
          </td>
          <td className="member">
            <figure><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/584938/people_8.png" alt="Member" /></figure>
            <div className="member-info">
              <p>Myrtle Erickson</p>
              <p>UK Design Team</p>
            </div>
          </td>
          <td>
            <p>$4,670</p>
            <p>Paid</p>
          </td>
          <td className="status">
            <span className="status-text status-orange">In progress</span>
          </td>
          <td>
            <form className="form" action="#" method="POST">
              <select className="action-box">
                <option>Actions</option>
                <option>Start project</option>
                <option>Send for QA</option>
                <option>Send invoice</option>
              </select>
            </form>
          </td>
        </tr>

        <tr>
          <td>
            <p>New Dashboard</p>
            <p>Google</p>
          </td>
          <td>
            <p>17th Oct, 15</p>
            <p className="text-danger">Overdue</p>
          </td>
          <td className="member">
            <figure><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/584938/people_8.png" alt="Member" /></figure>
            <div className="member-info">
              <p>Myrtle Erickson</p>
              <p>UK Design Team</p>
            </div>
          </td>
          <td>
            <p>$4,670</p>
            <p>Paid</p>
          </td>
          <td className="status">
            <span className="status-text status-orange">In progress</span>
          </td>
          <td>
            <form className="form" action="#" method="POST">
              <select className="action-box">
                <option>Actions</option>
                <option>Start project</option>
                <option>Send for QA</option>
                <option>Send invoice</option>
              </select>
            </form>
          </td>
        </tr>

        <tr>
          <td>
            <p>New Dashboard</p>
            <p>Google</p>
          </td>
          <td>
            <p>17th Oct, 15</p>
            <p className="text-danger">Overdue</p>
          </td>
          <td className="member">
            <figure><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/584938/people_8.png" alt="Member" /></figure>
            <div className="member-info">
              <p>Myrtle Erickson</p>
              <p>UK Design Team</p>
            </div>
          </td>
          <td>
            <p>$4,670</p>
            <p>Paid</p>
          </td>
          <td className="status">
            <span className="status-text status-orange">In progress</span>
          </td>
          <td>
            <form className="form" action="#" method="POST">
              <select className="action-box">
                <option>Actions</option>
                <option>Start project</option>
                <option>Send for QA</option>
                <option>Send invoice</option>
              </select>
            </form>
          </td>
        </tr>

        <tr>
          <td>
            <p>New Dashboard</p>
            <p>Google</p>
          </td>
          <td>
            <p>17th Oct, 15</p>
            <p className="text-danger">Overdue</p>
          </td>
          <td className="member">
            <figure><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/584938/people_8.png" alt="Member" /></figure>
            <div className="member-info">
              <p>Myrtle Erickson</p>
              <p>UK Design Team</p>
            </div>
          </td>
          <td>
            <p>$4,670</p>
            <p>Paid</p>
          </td>
          <td className="status">
            <span className="status-text status-orange">In progress</span>
          </td>
          <td>
            <form className="form" action="#" method="POST">
              <select className="action-box">
                <option>Actions</option>
                <option>Start project</option>
                <option>Send for QA</option>
                <option>Send invoice</option>
              </select>
            </form>
          </td>
        </tr>

        <tr>
          <td>
            <p>New Dashboard</p>
            <p>Google</p>
          </td>
          <td>
            <p>17th Oct, 15</p>
            <p className="text-danger">Overdue</p>
          </td>
          <td className="member">
            <figure><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/584938/people_8.png" alt="Member" /></figure>
            <div className="member-info">
              <p>Myrtle Erickson</p>
              <p>UK Design Team</p>
            </div>
          </td>
          <td>
            <p>$4,670</p>
            <p>Paid</p>
          </td>
          <td className="status">
            <span className="status-text status-orange">In progress</span>
          </td>
          <td>
            <form className="form" action="#" method="POST">
              <select className="action-box">
                <option>Actions</option>
                <option>Start project</option>
                <option>Send for QA</option>
                <option>Send invoice</option>
              </select>
            </form>
          </td>
        </tr>

        <tr>
          <td>
            <p>New Dashboard</p>
            <p>Google</p>
          </td>
          <td>
            <p>17th Oct, 15</p>
            <p className="text-danger">Overdue</p>
          </td>
          <td className="member">
            <figure><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/584938/people_8.png" alt="Member" /></figure>
            <div className="member-info">
              <p>Myrtle Erickson</p>
              <p>UK Design Team</p>
            </div>
          </td>
          <td>
            <p>$4,670</p>
            <p>Paid</p>
          </td>
          <td className="status">
            <span className="status-text status-orange">In progress</span>
          </td>
          <td>
            <form className="form" action="#" method="POST">
              <select className="action-box">
                <option>Actions</option>
                <option>Start project</option>
                <option>Send for QA</option>
                <option>Send invoice</option>
              </select>
            </form>
          </td>
        </tr>

        <tr>
          <td>
            <p>New Dashboard</p>
            <p>Google</p>
          </td>
          <td>
            <p>17th Oct, 15</p>
            <p className="text-danger">Overdue</p>
          </td>
          <td className="member">
            <figure><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/584938/people_8.png" alt="Member" /></figure>
            <div className="member-info">
              <p>Myrtle Erickson</p>
              <p>UK Design Team</p>
            </div>
          </td>
          <td>
            <p>$4,670</p>
            <p>Paid</p>
          </td>
          <td className="status">
            <span className="status-text status-orange">In progress</span>
          </td>
          <td>
            <form className="form" action="#" method="POST">
              <select className="action-box">
                <option>Actions</option>
                <option>Start project</option>
                <option>Send for QA</option>
                <option>Send invoice</option>
              </select>
            </form>
          </td>
        </tr>
        {/* Add more table rows as needed */}
      </tbody>
    </table>
  );
}

export default ProjectTable;
