import React from 'react'
import {BrowserRouter as Router , Route,Routes} from "react-router-dom"
import "./App.css"
import OurHome from './screens/homepage/OurHome.jsx'
import Contact from './screens/contact/Contact.jsx'
import About from './screens/about/About.jsx'
import Login from './screens/login/Login.jsx'
import SignUp from './screens/signup/SignUp.jsx'
import SignUpPre from './screens/SignUpPre.jsx'
import SignUpArchitect from './screens/signup/SignUpArchitect.jsx'
import SignUpContractor from './screens/signup/SignUpContractor.jsx'
import SignUpPackers from './screens/signup/SignUpPackers.jsx'
import SignUpSupplier from './screens/signup/SignUpSupplier.jsx'
import LoginArchitect from './screens/login/LoginArchitect.jsx'
import LoginContractor from './screens/login/LoginContractor.jsx'
import LoginPackers from './screens/login/LoginPackers.jsx'
import LoginSupplier from './screens/login/LoginSupplier.jsx'
import Charts from './components/Dashboards/ArchitectDashboard.jsx'
import Profile from './screens/Profile/Profile.jsx'
import AppUserProfile from './screens/UserProfile/AppUser.jsx'
import AppChat from './screens/Aichat/Aichat.jsx'
import Userdash from './screens/userdash/userdashboard.jsx';
import Appcard from './components/Productcard/Appcard.jsx';
import Arcomponent from './components2/Arcomponent.jsx'
import TextAreaComponent from './components2/Moversandpackers/moversandpackers.jsx';
import Splinee from './components3/Splinee.jsx'
import AppDoc from './components2/Doc-manager/docmanager.jsx';
import HomeTour from './screens/HomeTour.jsx'
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<OurHome/>}/>
        <Route path="/spline" element={<Splinee/>}/>
        <Route path="/hometour" element={<HomeTour/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/about" element={<About/>}/>
        {/* <Route path='/login' element={<LoginPre/>}/> */}
        <Route path='/loginuser' element={<Login/>}/>
        <Route path='/signup' element={<SignUpPre/>}/>
        <Route path='/createuser' element={<SignUp/>}/>
        <Route path='/createarchitect' element={<SignUpArchitect/>}/>
        <Route path='/createsupplier' element={<SignUpSupplier/>}/>
        <Route path='/createpackersmovers' element={<SignUpPackers/>}/>
        <Route path='/createcontractor' element={<SignUpContractor/>}/>
        <Route path='/loginarchitect' element={<LoginArchitect/>}/>
        <Route path='/loginsupplier' element={<LoginSupplier/>}/>
        <Route path='/loginpackersmovers' element={<LoginPackers/>}/>
        <Route path='/logincontractor' element={<LoginContractor/>}/>
        <Route path='/dashboard' element={<Charts/>}/>
        <Route path='/products' element ={<Appcard/>}/>
        <Route path='/architect' element ={<Profile/>}/>
        <Route path='/user' element ={<AppUserProfile/>}/>
        <Route path='/chat' element ={<AppChat/>}/>
        <Route path='/architectDashboard' element ={<Charts/>}/>
        <Route path='/userdash' element={<Userdash/>}/>
        <Route path='/arRoom' element ={<Arcomponent/>}/>
        <Route path='/moversss' element ={<TextAreaComponent/>}/>
        <Route path='/docss' element={<AppDoc/>}/>
      </Routes>
    </Router>
  )
}
