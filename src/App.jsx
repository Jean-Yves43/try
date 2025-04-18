import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Events from './Components/Events/Events';
import AOS from 'aos';
import "aos/dist/aos.css";
import TopEvents from './Components/TopEvents/TopEvents';
import Footer from './Components/Footer/Footer';
import Ticket from './Components/Ticket/Ticket';
import Invoice from './Components/Ticket/clientInvoice';



const App = () => {

  React.useEffect(() => {
    AOS.init({
      offset:100,
      duration: 800,
      easing: 'ease-in-sine',
      delay:100,
    });
  }, []); 
  return (
    <div >
      {/* <Navbar />
      <Hero />
      <Events />
      <TopEvents />
      <Footer /> */}
      <Invoice />
    </div>
  )
}

export default App
