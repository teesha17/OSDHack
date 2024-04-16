import React from 'react'
import {BrowserRouter as Router , Route,Routes} from "react-router-dom"
import "./App.css"
import Home from './screens/homepage/Home.jsx'
import Contact from './screens/contact/Contact.jsx'
import About from './screens/about/About.jsx'
import Login from './screens/Login.jsx'
import SignUp from './screens/SignUp.jsx'
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/createuser' element={<SignUp/>}/>
      </Routes>
    </Router>
  )
}
