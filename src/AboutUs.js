import React from 'react';
import firstPic from './assets/images/intro-pic.jpg';
import secondPic from './assets/images/studio-pic.jpg';
import thirdPic from './assets/images/team-pic.jpg';


const AboutUs = () => {
  return (
    <section className="about-us-container">
      <div className="mission-statement">
      <h1>Mission Statement</h1>
      <p>
        4700 Enteprisess is a Multi-Media Company focused on developing and distributing genre bending and envelope pushing content. We specialize in Music Distrbution, Publishing and Promotion. Our Goal is to provide an ecosystem of quality music catalogs, content and products that continue to shape the current landscape of music. We work with artists, organizations and labels of different types and create different initiatives and products that will continue to disrupt but grow the current music industry.
      </p>

      </div>

      <h1>About Us</h1>
      <div className="timeline">
        <div className="timeline-event">
          <div className="timeline-content">
            <h2>Humble Beginnings (2017 - 2018)</h2>
            <p>
            4700 Enterprises was founded by Shekelton Jean and Tavares Kidd in 2017. The vision for the label was simple. We wanted to sign, develop and distribute Independent talent to a growing demographic of streamers and music lovers. The label took it's time to develop it's foundations.
            </p>
          </div>
          <img src={firstPic} alt="Our Beginning" />
        </div>

        <div className="timeline-event">
          <div className="timeline-content">
            <h2>New Additions..New Releases (2020 - 2021)</h2>
            <p>
              After a brief stint of working in Recording Studios, Blackmon and Suppa start to sign some of the first producers to the label. Those producers being Flaco Royale, Timothy Branch and CJ Ali. This roster helped to become the cornerstone of the label.
             </p>
          </div>
          <img src={thirdPic} alt="Recent Achievements" />
        </div>

        <div className="timeline-event">
          <div className="timeline-content">
            <h2>New Additions..New Releases (2022)</h2>
            <p>
              Focusing in Publishing and Production, the label released a releases of Singles and Projects. Flacodoplis released to a warm accliam in late 2021. Timothy Branch realeased his debut single "YSYU". CJ also contributed releasing his debut project "Ups and Downs". 
             </p>
          </div>
          <img src={thirdPic} alt="Recent Achievements" />
        </div>


        <div className="timeline-event">
          <div className="timeline-content">
            <h2>New Additions..New Releases (2023 - Present)</h2>
            <p>
            Recently, we added our first two recording artists to the list of talent within the roster with Baloww and Biig Geech. Singles like "Run Away" and "IDGAF" ushered a new age in the label. The label is working to release the next set of releases from the 4700 Enterprises team.
             </p>
          </div>
          <img src={thirdPic} alt="Recent Achievements" />
        </div>



      </div>
    </section>
  );
};

export default AboutUs;
