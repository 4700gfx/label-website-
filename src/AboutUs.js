// src/AboutUs.js

import React, { useRef, useEffect } from 'react';
import firstPic from './assets/images/intro-pic.jpg';
import secondPic from './assets/images/studio-pic.jpg';
import thirdPic from './assets/images/team-pic.jpg';


const AboutUs = () => {
  const sectionRef = useRef(null);
  const timelineRefs = useRef([]);

  useEffect(() => {
    const sectionObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        sectionRef.current.classList.add('animate');
      }
    }, { threshold: 0.1 });

    const timelineObservers = timelineRefs.current.map((ref, index) => {
      return new IntersectionObserver(([entry], observer) => {
        if (entry.isIntersecting) {
          ref.classList.add('animate');
          // Disconnect the observer once the animation has been applied
          observer.disconnect();
        }
      }, { threshold: 0.1 });
    });

    sectionObserver.observe(sectionRef.current);
    timelineRefs.current.forEach((ref, index) => {
      if (ref) timelineObservers[index].observe(ref);
    });

    return () => {
      sectionObserver.disconnect();
      timelineRefs.current.forEach((ref, index) => {
        if (ref) timelineObservers[index].disconnect();
      });
    };
  }, []);

  return (
    <section className="about-us-container" id='AboutUs' ref={sectionRef}>
      <h1>About Us</h1>

      <div className="timeline">
        <div className="timeline-event" ref={(el) => (timelineRefs.current[0] = el)}>
          <div className="timeline-content">
            <h2>Humble Beginnings (2017 - 2018)</h2>
            <p>
              4700 Enterprises was founded by Shekelton Jean and Tavares Kidd in 2017. The vision for the label was simple. We wanted to sign, develop and distribute Independent talent to a growing demographic of streamers and music lovers. The label took its time to develop its foundations.
            </p>
          </div>
          <img src={firstPic} alt="Our Beginning" />
        </div>

        <div className="timeline-event" ref={(el) => (timelineRefs.current[1] = el)}>
          <div className="timeline-content">
            <h2>New Additions..New Releases (2020 - 2021)</h2>
            <p>
              After a brief stint of working in Recording Studios, Blackmon and Suppa start to sign some of the first producers to the label. Those producers being Flaco Royale, Timothy Branch and CJ Ali. This roster helped to become the cornerstone of the label.
            </p>
          </div>
          <img src={thirdPic} alt="Recent Achievements" />
        </div>

        <div className="timeline-event" ref={(el) => (timelineRefs.current[2] = el)}>
          <div className="timeline-content">
            <h2>New Additions..New Releases (2022)</h2>
            <p>
              Focusing in Publishing and Production, the label released a releases of Singles and Projects. Flacodoplis released to a warm accliam in late 2021. Timothy Branch realeased his debut single "YSYU". CJ also contributed releasing his debut project "Ups and Downs". 
            </p>
          </div>
          <img src={secondPic} alt="Recent Achievements" />
        </div>

        <div className="timeline-event" ref={(el) => (timelineRefs.current[3] = el)}>
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
