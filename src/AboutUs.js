import React from 'react';
import firstPic from './assets/images/intro-pic.jpg';
import secondPic from './assets/images/studio-pic.jpg';
import thirdPic from './assets/images/team-pic.jpg';


const AboutUs = () => {
  return (
    <section className="about-us-container">
      <h1>About Us</h1>
      <div className="timeline">
        <div className="timeline-event">
          <div className="timeline-content">
            <h2>Humble Beginnings (2017 - 2020)</h2>
            <p>
            4700 Enterprises was founded by Shekelton Jean and Tavares Kidd in 2017. The vision for the label was simple. We wanted to sign, develop and distribute Independent talent to a growing demographic of streamers and music lovers. The company started primarily with 4 Producers including Shekelton. Barely even incorporated, we worked to set up the foundations of the label.
            </p>
          </div>
          <img src={firstPic} alt="Our Beginning" />
        </div>
        <div className="timeline-event">
          <div className="timeline-content">
            <h2>Additions and Releases (2021 - 2022)</h2>
            <p>
              Blackmon Don and Suppa work to expand the 4700 Enterprises Roster signing more talents, and working to release more music. By 2021 Flaco Royale released "Flacodopolis", which marked the first release from 4700 Enterprises. Timothy Branch released "YSYU" and CJ Ali released "Ups and Downs" all were recieved well among the local South Florida community.
            </p>
          </div>
          <img src={secondPic} alt="Milestone 1" />
        </div>
        <div className="timeline-event">
          <div className="timeline-content">
            <h2>New Additions..New Releases (2023 - Present)</h2>
            <p>
            Recently, we added our first two recording artists to the list of talent within the roster with Baloww and Biig Geech. Singles like "Run Away" and "IDGAF" provided a new energy to the label and ushered in a new age of music from the label. The label is working to release the next set of releases from the 4700 Enterprises team.
             </p>
          </div>
          <img src={thirdPic} alt="Recent Achievements" />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
