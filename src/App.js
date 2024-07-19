import './style.css';
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import AboutUs from './AboutUs';
import MissionStatement from './MissionStatement';

function App() {
  return (
    <div>
        <Navbar></Navbar>
        <Home></Home>
        <MissionStatement></MissionStatement>
        <AboutUs></AboutUs>
    </div>
  );
}

export default App;
