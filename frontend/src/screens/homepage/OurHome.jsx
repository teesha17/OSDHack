

// import Header from './Components/Header/Header';
import Header from '../../components/Header/Header';
import HomeSection from '../../components/Home/Home';
// import ProfileCards from '../../Components/People/People';
import Testimonials from '../../components/Testimonial/Testimonial';
import NumberCountingAnimation from '../../components/Counter/Counter';
import AboutSection from '../../components/About/About';
import IconsSection from '../../components/Icons/Icon';
import FooterSection from '../../components/footer/Footer';
import ServicesSection from '../../components/Services/Services';
import PricingComponent from '../../components/Pricing/Pricing';
// import OrderCard from '../../components/OrderTrack/Track';

import AppChat from '../Aichat/Aichat';



function OurHome() {
  return (
    <div className="App">
    <Header/>
  <HomeSection/>    <AboutSection/>
 
   <AppChat/>
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
