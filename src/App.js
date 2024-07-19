import './style.css';
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import AboutUs from './AboutUs';
import MissionStatement from './MissionStatement';
import ArtistSection from './ArtistSection';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Only animate once
    });
  }, []);

  return (
    <div>
        <Navbar></Navbar>
        <Home></Home>
        <MissionStatement></MissionStatement>
        <AboutUs></AboutUs>
        <ArtistSection></ArtistSection>
    </div>
  );
};

export default App;



