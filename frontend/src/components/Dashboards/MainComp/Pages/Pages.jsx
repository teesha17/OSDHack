import React from 'react';
// import './Pages.css'
import Dashboard from '../Boxes';
import ProjectTable from '../Table';

const ChartsOne = () => {
  return (
    <div className='bodyyy-chart'>
  
    <div className="container-chart">
     
      <div className="donut-chart-block block">
        <h2 className="titular">OS AUDIENCE STATS</h2>
        <div className="donut-chart">
       
          <div id="porcion1" className="recorte">
            <div className="quesito ios" data-rel="21"></div>
          </div>
          <div id="porcion2" className="recorte">
            <div className="quesito mac" data-rel="39"></div>
          </div>
          <div id="porcion3" className="recorte">
            <div className="quesito win" data-rel="31"></div>
          </div>
          <div id="porcionFin" className="recorte">
            <div className="quesito linux" data-rel="9"></div>
          </div>
          {/* FIN AÑADIDO GRÄFICO */}
          <p className="center-date">JUNE<br /><span className="scnd-font-color">2013</span></p>
        </div>



        <ul className="os-percentages horizontal-list">
          <li>
            <p className="ios os scnd-font-color">iOS</p>
            <p className="os-percentage">21<sup>%</sup></p>
          </li>
          <li>
            <p className="mac os scnd-font-color">Mac</p>
            <p className="os-percentage">39<sup>%</sup></p>
          </li>
          <li>
            <p className="linux os scnd-font-color">Linux</p>
            <p className="os-percentage">9<sup>%</sup></p>
          </li>
          <li>
            <p className="win os scnd-font-color">Win</p>
            <p className="os-percentage">31<sup>%</sup></p>
          </li>
        </ul>
      </div>



      {/* LINE CHART BLOCK (LEFT-CONTAINER) */}
      <div className="line-chart-block block">
        <div className="line-chart">
          <div className='grafico'>
            <ul className='eje-y'>
              <li data-ejeY='30'></li>
              <li data-ejeY='20'></li>
              <li data-ejeY='10'></li>
              <li data-ejeY='0'></li>
            </ul>
            <ul className='eje-x'>
              <li>Apr</li>
              <li>May</li>
              <li>Jun</li>
            </ul>
            <span data-valor='25'>
              <span data-valor='8'>
                <span data-valor='13'>
                  <span data-valor='5'>
                    <span data-valor='23'>
                      <span data-valor='12'>
                        <span data-valor='15'>
                        </span>
                      </span>
                    </span>
                  </span>
                </span>
              </span>
            </span>
          </div>
        </div>

        
        <ul className="time-lenght horizontal-list">
          <li><a className="time-lenght-btn" href="#14">Week</a></li>
          <li><a className="time-lenght-btn" href="#15">Month</a></li>
          <li><a className="time-lenght-btn" href="#16">Year</a></li>
        </ul>
        <ul className="month-data clear">
          <li>
            <p>APR<span className="scnd-font-color"> 2013</span></p>
            <p><span className="entypo-plus increment"> </span>21<sup>%</sup></p>
          </li>
          <li>
            <p>MAY<span className="scnd-font-color"> 2013</span></p>
            <p><span className="entypo-plus increment"> </span>48<sup>%</sup></p>
          </li>
          <li>
            <p>JUN<span className="scnd-font-color"> 2013</span></p>
            <p><span className="entypo-plus increment"> </span>35<sup>%</sup></p>
          </li>
        </ul>
      </div>
      <div className="bar-chart-block block">
        <h2 className='titular'>By Country <span>*1000</span></h2>
        <div className='grafico bar-chart'>
          <ul className='eje-y'>
            <li data-ejeY='60'></li>
            <li data-ejeY='45'></li>
            <li data-ejeY='30'></li>
            <li data-ejeY='15'></li>
            <li data-ejeY='0'></li>
          </ul>
          <ul className='eje-x'>
            <li data-ejeX='37'><i>España</i></li>
            <li data-ejeX='56'><i>Portugal</i></li>
            <li data-ejeX='25'><i>Italia</i></li>
            <li data-ejeX='18'><i>Grecia</i></li>
            <li data-ejeX='45'><i>EE.UU</i></li>
            <li data-ejeX='50'><i>México</i></li>
            <li data-ejeX='33'><i>Chile</i></li>
          </ul>
        </div>
      </div>
    </div>
    </div>

    
  );
}

const Mainn = () => {
  return (
    <div className="content-wrapper">
   <Dashboard/>
   <ProjectTable/>
  <ChartsOne/>
  
    </div>
  );
}




// NavbarBrand Component
const NavbarBrand = () => {
  return (
    <a className="navbar-brand" href="index.html">Start Bootstrap</a>
  );
};

// NavbarToggler Component
const NavbarToggler = () => {
  return (
    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  );
};

// NavItem Component
const NavItem = ({ href, text }) => {
  return (
    <li className="nav-item" data-toggle="tooltip" data-placement="right" title={text}>
      <a className="nav-link" href={href}>{text}</a>
    </li>
  );
};

// DropdownMenu Component
const DropdownMenu = ({ title, items }) => {
  return (
    <ul className="dropdown-menu" aria-labelledby={title + 'Dropdown'}>
      {items.map((item, index) => (
        <li key={index}>
          <a className="dropdown-item" href={item.href}>{item.text}</a>
        </li>
      ))}
    </ul>
  );
};

// Navbar Component
const Navbarr = () => {
  return (
    <div  className="fixed-nav sticky-footer bg-dark" id="page-top">
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
      <NavbarBrand />
      <NavbarToggler />
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav navbar-sidenav" id="exampleAccordion">
          {/* NavItem Components */}
          <NavItem href="index.html" text="Dashboard" />
          <NavItem href="charts.html" text="Charts" />
          <NavItem href="tables.html" text="Tables" />
          <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Components">
            <a className="nav-link nav-link-collapse collapsed" data-toggle="collapse" href="#collapseComponents" data-parent="#exampleAccordion">
              <i className="fa fa-fw fa-wrench"></i>
              <span className="nav-link-text">Components</span>
            </a>
            <ul className="sidenav-second-level collapse" id="collapseComponents">
              <NavItem href="navbar.html" text="Navbar" />
              <NavItem href="cards.html" text="Cards" />
            </ul>
          </li>
          {/* Add more NavItems here */}
        </ul>
        {/* Additional Navbar content */}
        <ul className="navbar-nav ml-auto">
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle mr-lg-2" id="messagesDropdown" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <i className="fa fa-fw fa-envelope"></i>
              <span className="d-lg-none">Messages
                <span className="badge badge-pill badge-primary">12 New</span>
              </span>
              <span className="indicator text-primary d-none d-lg-block">
                <i className="fa fa-fw fa-circle"></i>
              </span>
            </a>
            {/* DropdownMenu Component for Messages */}
          </li>
          {/* Add more dropdowns or nav items here */}
        </ul>
        <form className="form-inline my-2 my-lg-0 mr-lg-2">
          <div className="input-group">
            <input className="form-control" type="text" placeholder="Search for..." />
            <span className="input-group-append">
              <button className="btn btn-primary" type="button">
                <i className="fa fa-search"></i>
              </button>
            </span>
          </div>
        </form>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link" data-toggle="modal" data-target="#exampleModal">
              <i className="fa fa-fw fa-sign-out"></i>Logout</a>
          </li>
        </ul>
      </div>
    </nav>
    <div className="content-wrapper">
      <div className="container-fluid">
        {/* Breadcrumbs */}
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="#">Dashboard</a>
          </li>
          <li className="breadcrumb-item active">My Dashboard</li>
        </ol>
        {/* Icon Cards */}
        <div className="row">
          <div className="col-xl-3 col-sm-6 mb-3">
            <div className="card text-white bg-primary o-hidden h-100">
              <div className="card-body">
                <div className="card-body-icon">
                  <i className="fa fa-fw fa-comments"></i>
                </div>
                <div className="mr-5">26 New Messages!</div>
              </div>
              <a className="card-footer text-white clearfix small z-1" href="#">
                <span className="float-left">View Details</span>
                <span className="float-right">
                  <i className="fa fa-angle-right"></i>
                </span>
              </a>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 mb-3">
            <div className="card text-white bg-warning o-hidden h-100">
              <div className="card-body">
                <div className="card-body-icon">
                  <i className="fa fa-fw fa-list"></i>
                </div>
                <div className="mr-5">11 New Tasks!</div>
              </div>
              <a className="card-footer text-white clearfix small z-1" href="#">
                <span className="float-left">View Details</span>
                <span className="float-right">
                  <i className="fa fa-angle-right"></i>
                </span>
              </a>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 mb-3">
            <div className="card text-white bg-success o-hidden h-100">
              <div className="card-body">
                <div className="card-body-icon">
                  <i className="fa fa-fw fa-shopping-cart"></i>
                </div>
                <div className="mr-5">123 New Orders!</div>
              </div>
              <a className="card-footer text-white clearfix small z-1" href="#">
                <span className="float-left">View Details</span>
                <span className="float-right">
                  <i className="fa fa-angle-right"></i>
                </span>
              </a>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 mb-3">
            <div className="card text-white bg-danger o-hidden h-100">
              <div className="card-body">
                <div className="card-body-icon">
                  <i className="fa fa-fw fa-support"></i>
                </div>
                <div className="mr-5">13 New Tickets!</div>
              </div>
              <a className="card-footer text-white clearfix small z-1" href="#">
                <span className="float-left">View Details</span>
                <span className="float-right">
                  <i className="fa fa-angle-right"></i>
                </span>
              </a>
            </div>
          </div>
        </div>
        {/* Area Chart Example */}
        <div className="card mb-3">
          <div className="card-header">
            <i className="fa fa-area-chart"></i> Area Chart Example
          </div>
          <div className="card-body">
            <canvas id="myAreaChart" width="100%" height="30"></canvas>
          </div>
          <div className="card-footer small text-muted">Updated yesterday at 11:59 PM</div>
        </div>
        <div className="row">
          <div className="col-lg-8">
            {/* Example Bar Chart Card */}
            <div className="card mb-3">
              <div className="card-header">
                <i className="fa fa-bar-chart"></i> Bar Chart Example
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-8 my-auto">
                    <canvas id="myBarChart" width="100" height="50"></canvas>
                  </div>
                  <div className="col-sm-4 text-center my-auto">
                    <div className="h4 mb-0 text-primary">$34,693</div>
                    <div className="small text-muted">YTD Revenue</div>
                    <hr />
                    <div className="h4 mb-0 text-warning">$18,474</div>
                    <div className="small text-muted">YTD Expenses</div>
                    <hr />
                    <div className="h4 mb-0 text-success">$16,219</div>
                    <div className="small text-muted">YTD Margin</div>
                  </div>
                </div>
              </div>
              <div className="card-footer small text-muted">Updated yesterday at 11:59 PM</div>
            </div>
            {/* Card Columns Example Social Feed */}
            <div className="mb-0 mt-4">
              <i className="fa fa-newspaper-o"></i> News Feed
            </div>
            <hr className="mt-2" />
            <div className="card-columns">
              {/* Example Social Card */}
              <div className="card mb-3">
                {/* Social Card Content */}
              </div>
              {/* Example Social Card */}
              <div className="card mb-3">
                {/* Social Card Content */}
              </div>
              {/* Example Social Card */}
              <div className="card mb-3">
                {/* Social Card Content */}
              </div>
              {/* Example Social Card */}
              <div className="card mb-3">
                {/* Social Card Content */}
              </div>
            </div>
            {/* /Card Columns */}
          </div>
          <div className="col-lg-4">
            {/* Example Pie Chart Card */}
            <div className="card mb-3">
              {/* Pie Chart Content */}
            </div>
            {/* Example Notifications Card */}
            <div className="card mb-3">
              {/* Notifications Content */}
            </div>
          </div>
        </div>
        {/* Example DataTables Card */}
        <div className="card mb-3">
          <div className="card-header">
            <i className="fa fa-table"></i> Data Table Example
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Position</th>
                    <th>Office</th>
                    <th>Age</th>
                    <th>Start date</th>
                    <th>Salary</th>
                  </tr>
                </thead>
                <tfoot>
                  <tr>
                    <th>Name</th>
                    <th>Position</th>
                    <th>Office</th>
                    <th>Age</th>
                    <th>Start date</th>
                    <th>Salary</th>
                  </tr>
                </tfoot>
                <tbody>
                  
                <tr>
                    <td>Tiger Nixon</td>
                    <td>System Architect</td>
                    <td>Edinburgh</td>
                    <td>61</td>
                    <td>2011/04/25</td>
                    <td>$320,800</td>
                  </tr>
                  <tr>
                    <td>Garrett Winters</td>
                    <td>Accountant</td>
                    <td>Tokyo</td>
                    <td>63</td>
                    <td>2011/07/25</td>
                    <td>$170,750</td>
                  </tr><tr>
                    <td>Tiger Nixon</td>
                    <td>System Architect</td>
                    <td>Edinburgh</td>
                    <td>61</td>
                    <td>2011/04/25</td>
                    <td>$320,800</td>
                  </tr>
                  <tr>
                    <td>Garrett Winters</td>
                    <td>Accountant</td>
                    <td>Tokyo</td>
                    <td>63</td>
                    <td>2011/07/25</td>
                    <td>$170,750</td>
                  </tr><tr>
                    <td>Tiger Nixon</td>
                    <td>System Architect</td>
                    <td>Edinburgh</td>
                    <td>61</td>
                    <td>2011/04/25</td>
                    <td>$320,800</td>
                  </tr>
                  <tr>
                    <td>Garrett Winters</td>
                    <td>Accountant</td>
                    <td>Tokyo</td>
                    <td>63</td>
                    <td>2011/07/25</td>
                    <td>$170,750</td>
                  </tr><tr>
                    <td>Tiger Nixon</td>
                    <td>System Architect</td>
                    <td>Edinburgh</td>
                    <td>61</td>
                    <td>2011/04/25</td>
                    <td>$320,800</td>
                  </tr>
                  <tr>
                    <td>Garrett Winters</td>
                    <td>Accountant</td>
                    <td>Tokyo</td>
                    <td>63</td>
                    <td>2011/07/25</td>
                    <td>$170,750</td>
                  </tr><tr>
                    <td>Tiger Nixon</td>
                    <td>System Architect</td>
                    <td>Edinburgh</td>
                    <td>61</td>
                    <td>2011/04/25</td>
                    <td>$320,800</td>
                  </tr>
                  <tr>
                    <td>Garrett Winters</td>
                    <td>Accountant</td>
                    <td>Tokyo</td>
                    <td>63</td>
                    <td>2011/07/25</td>
                    <td>$170,750</td>
                  </tr><tr>
                    <td>Tiger Nixon</td>
                    <td>System Architect</td>
                    <td>Edinburgh</td>
                    <td>61</td>
                    <td>2011/04/25</td>
                    <td>$320,800</td>
                  </tr>
                  <tr>
                    <td>Garrett Winters</td>
                    <td>Accountant</td>
                    <td>Tokyo</td>
                    <td>63</td>
                    <td>2011/07/25</td>
                    <td>$170,750</td>
                  </tr><tr>
                    <td>Tiger Nixon</td>
                    <td>System Architect</td>
                    <td>Edinburgh</td>
                    <td>61</td>
                    <td>2011/04/25</td>
                    <td>$320,800</td>
                  </tr>
                  <tr>
                    <td>Garrett Winters</td>
                    <td>Accountant</td>
                    <td>Tokyo</td>
                    <td>63</td>
                    <td>2011/07/25</td>
                    <td>$170,750</td>
                  </tr><tr>
                    <td>Tiger Nixon</td>
                    <td>System Architect</td>
                    <td>Edinburgh</td>
                    <td>61</td>
                    <td>2011/04/25</td>
                    <td>$320,800</td>
                  </tr>
                  <tr>
                    <td>Garrett Winters</td>
                    <td>Accountant</td>
                    <td>Tokyo</td>
                    <td>63</td>
                    <td>2011/07/25</td>
                    <td>$170,750</td>
                  </tr><tr>
                    <td>Tiger Nixon</td>
                    <td>System Architect</td>
                    <td>Edinburgh</td>
                    <td>61</td>
                    <td>2011/04/25</td>
                    <td>$320,800</td>
                  </tr>
                  <tr>
                    <td>Garrett Winters</td>
                    <td>Accountant</td>
                    <td>Tokyo</td>
                    <td>63</td>
                    <td>2011/07/25</td>
                    <td>$170,750</td>
                  </tr><tr>
                    <td>Tiger Nixon</td>
                    <td>System Architect</td>
                    <td>Edinburgh</td>
                    <td>61</td>
                    <td>2011/04/25</td>
                    <td>$320,800</td>
                  </tr>
                  <tr>
                    <td>Garrett Winters</td>
                    <td>Accountant</td>
                    <td>Tokyo</td>
                    <td>63</td>
                    <td>2011/07/25</td>
                    <td>$170,750</td>
                  </tr><tr>
                    <td>Tiger Nixon</td>
                    <td>System Architect</td>
                    <td>Edinburgh</td>
                    <td>61</td>
                    <td>2011/04/25</td>
                    <td>$320,800</td>
                  </tr>
                  <tr>
                    <td>Garrett Winters</td>
                    <td>Accountant</td>
                    <td>Tokyo</td>
                    <td>63</td>
                    <td>2011/07/25</td>
                    <td>$170,750</td>
                  </tr><tr>
                    <td>Tiger Nixon</td>
                    <td>System Architect</td>
                    <td>Edinburgh</td>
                    <td>61</td>
                    <td>2011/04/25</td>
                    <td>$320,800</td>
                  </tr>
                  <tr>
                    <td>Garrett Winters</td>
                    <td>Accountant</td>
                    <td>Tokyo</td>
                    <td>63</td>
                    <td>2011/07/25</td>
                    <td>$170,750</td>
                  </tr><tr>
                    <td>Tiger Nixon</td>
                    <td>System Architect</td>
                    <td>Edinburgh</td>
                    <td>61</td>
                    <td>2011/04/25</td>
                    <td>$320,800</td>
                  </tr>
                  <tr>
                    <td>Garrett Winters</td>
                    <td>Accountant</td>
                    <td>Tokyo</td>
                    <td>63</td>
                    <td>2011/07/25</td>
                    <td>$170,750</td>
                  </tr><tr>
                    <td>Tiger Nixon</td>
                    <td>System Architect</td>
                    <td>Edinburgh</td>
                    <td>61</td>
                    <td>2011/04/25</td>
                    <td>$320,800</td>
                  </tr>
                  <tr>
                    <td>Garrett Winters</td>
                    <td>Accountant</td>
                    <td>Tokyo</td>
                    <td>63</td>
                    <td>2011/07/25</td>
                    <td>$170,750</td>
                  </tr>
                  {/* More table rows */}
                </tbody>
              </table>
            </div>
          </div>
          <div className="card-footer small text-muted">Updated yesterday at 11:59 PM</div>
        </div>
      </div>
    </div>
    </div>


  );
};



const Pages = () => {
  return (
    <>
  
    <Mainn/>
    </>
  )
}

export default Pages
