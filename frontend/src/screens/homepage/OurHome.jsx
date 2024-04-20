
import React from 'react';

// import Header from './components/Header/Header';
import Header from '../../components/Header/Header';
import HomeSection from '../../components/Home/Home';
// import ProfileCards from '../../components/People/People';
import Testimonials from '../../components/Testimonial/Testimonial';
import NumberCountingAnimation from '../../components/Counter/Counter';
import AboutSection from '../../components/About/About';
import IconsSection from '../../components/Icons/Icon';
import FooterSection from '../../components/footer/Footer';
import ServicesSection from '../../components/Services/Services';
import PricingComponent from '../../components/Pricing/Pricing';
function OurHome() {
  return (
    <div className="AppHome">
    <Header/>
  <HomeSection/>    <AboutSection/>
 
  
    <IconsSection/>
    <NumberCountingAnimation/>
    <ServicesSection/>
  <PricingComponent/>
    <Testimonials/>
    {/* <OrderCard/> */}
   
    <FooterSection/>
    {/* <ProfileCards/> */}
    </div>
  );
}

export default OurHome;
