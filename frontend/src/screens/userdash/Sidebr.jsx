import '@coreui/chartjs/dist/css/coreui-chartjs.css'
import '@coreui/coreui/dist/css/coreui.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-chat-elements/dist/main.css'
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import {Link} from 'react-router-dom';
import'./Userd.css';
function Sidebr(){
    return(
        <div className="frst">
  <div>
    <h2 style={{padding: "20px 0px 50px 0px"}}>Home Harbour</h2>
  </div>
<Sidebar className="side" backgroundColor='rgb(249,249,249)' width='100%' height='100vh' >
  <Menu>
    <MenuItem>Dashboard</MenuItem>
    <MenuItem>Visualiser</MenuItem>
    <MenuItem component={<Link to="/docss"/>}>Doc-Manager </MenuItem>
    <MenuItem component={<Link to="/moversss"/>}> Packers & Movers</MenuItem>
    <MenuItem> Finances </MenuItem>
    <MenuItem> Messages </MenuItem>
    <MenuItem> Predictive analysis </MenuItem>
  </Menu>
</Sidebar>
<div style={{margin:"0px 0px 30px 0px",fontWeight:"bold"}}>
  <button style={{border:"1px solid black", borderRadius:"10px"}}>Logout
  </button>
</div>
        </div>
    )
}

export default Sidebr;