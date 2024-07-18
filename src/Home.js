import React from 'react';
import videoSource from './assets/images/homevideo.mp4'; // Import your video file

const Home = () => {
  return (
    <div className="home-container">
      <video className="video-background" autoPlay muted loop>
        <source src={videoSource} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="text-overlay">
        <h1>Welcome to The Future of Independent Music!</h1>
        <p>
        This is the 4700 Enterprises Website. Here you can find information on your favorite artist, releases and more!. Consider this as a hub for everything 4700! You can visit our offical Merch Store for 4700 Gear and Accesories. 
        </p>
        <button>Learn More</button>
        <button>Contact Us</button>
      </div>
    </div>
  );
};

export default Home;
