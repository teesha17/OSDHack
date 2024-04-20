import '@coreui/chartjs/dist/css/coreui-chartjs.css'
import '@coreui/coreui/dist/css/coreui.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import'./Userd.css';

function Top({dat}){
    return(
        <div className="top">
        <div style={{display:"flex"}}><p style={{fontSize:"150%", marginLeft:"15px", marginBottom:"0px",}}>Hello, <b style={{fontSize:"180%"}}>{dat.name}</b></p></div>
        <div style={{display:"flex", alignItems:"center"}}><img className='profimg'  src={dat.profimg}/></div>
        </div>
    )
}

export default Top;