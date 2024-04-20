import React from 'react'
import { Link } from 'react-router-dom'
import "./SignUpPre.css"
export default function SignUpPre() {
  return (
    

<div class="ag-format-container">
  <h1 className='signinheader'>SIGN IN AS</h1>
  <div class="ag-courses_box">
    <div class="ag-courses_item">
      <a href="#" class="ag-courses-item_link">
        <div class="ag-courses-item_bg"></div>

        <div class="ag-courses-item_title">
        <Link to="/createuser">user</Link>
        </div>

        <div class="ag-courses-item_date-box">
          Start:
          <span class="ag-courses-item_date">
            04.11.2022
          </span>
        </div>
      </a>
    </div>

    <div class="ag-courses_item">
      <a href="#" class="ag-courses-item_link">
        <div class="ag-courses-item_bg"></div>

        <div class="ag-courses-item_title">
        <Link to="/createarchitect">Architect</Link>
        </div>

        <div class="ag-courses-item_date-box">
          Start:
          <span class="ag-courses-item_date">
            04.11.2022
          </span>
        </div>
      </a>
    </div>

    <div class="ag-courses_item">
      <a href="#" class="ag-courses-item_link">
        <div class="ag-courses-item_bg"></div>

        <div class="ag-courses-item_title">
        <Link to="/createpackersmovers">packers movers</Link>
        </div>

        <div class="ag-courses-item_date-box">
          Start:
          <span class="ag-courses-item_date">
            04.11.2022
          </span>
        </div>
      </a>
    </div>

    <div class="ag-courses_item">
      <a href="#" class="ag-courses-item_link">
        <div class="ag-courses-item_bg"></div>

        <div class="ag-courses-item_title">
        <Link to="/createcontractor">contractor</Link>
        </div>

        <div class="ag-courses-item_date-box">
          Start:
          <span class="ag-courses-item_date">
            04.11.2022
          </span>
        </div>
      </a>
    </div>

    <div class="ag-courses_item">
      <a href="#" class="ag-courses-item_link">
        <div class="ag-courses-item_bg"></div>

        <div class="ag-courses-item_title">
        <Link to="/createsupplier">supplier</Link>
        </div>

        <div class="ag-courses-item_date-box">
          Start:
          <span class="ag-courses-item_date">
            30.11.2022
          </span>
        </div>
      </a>
    </div>


  </div>
</div>
  )
}


