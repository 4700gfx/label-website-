import './style.css';
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import AboutUs from './AboutUs';
import MissionStatement from './MissionStatement';
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
        <AboutUs></AboutUs>
        <MissionStatement></MissionStatement>
    </div>
  );
};

export default App;



