import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import Baloww from './assets/images/balow.png';
import Kidd from './assets/images/kidd.png';
import Chel from './assets/images/chel.png';
import Miik from './assets/images/2k.png';
import BlackmonDon from './assets/images/black.png';
import TimothyBranch from './assets/images/timothy.png';
import bigGeech from './assets/images/geech.png';
import cjAli from './assets/images/cjali.png';

const images = [
  { 
    artistName: 'Blackmon Don',
    src: BlackmonDon,
    bio: 'Blackmon Don is a Producer, Artist, Engineer and Founder from North Miami, Florida. His euphoric and innovative style has made waves within the South Florida scene. Check out his latest release',
    iframe: "https://open.spotify.com/embed/track/6q6Aw0rqDxr1xgwLlkZMb7?utm_source=generator",
    artistLink: "https://linktr.ee/4700enterprises",
  },
  { 
    artistName: 'Suppa',
    src: Kidd,
    bio: 'Suppa is a Producer, Manager and Founder from Miami Gardens, Florida. His infectious drum patterns and approach to production has resulted in magnificent records',
    iframe: "https://open.spotify.com/embed/track/5a9kHq4d6EHwmLJ9enE77l?utm_source=generator",
    artistLink: "https://linktr.ee/4700enterprises",
  },
  { 
    artistName: 'Chel',
    src: Chel,
    bio: 'Chel is a Producer, Executive and Engineer from Miramar, Florida. His attention to detail and sharpness with Recording and Mixing has resulted in many releases',
    iframe: "https://open.spotify.com/embed/track/6ewktf73V0QkmvKN791wJ1?utm_source=generator&theme=0",
    artistLink: "https://linktr.ee/4700enterprises", 

  },
  { 
    artistName: 'Miik',
    src: Miik,
    bio: '2k is a Producer, A&R, Executive and Engineer from Miramar, Florida. His versatility as an Engineer and Producer helps to make some of the classics we are releasing in 2024',
    iframe: "https://open.spotify.com/embed/track/2Xhqd10lVkPMo8FxtidesP?utm_source=generator", 
    artistLink: "https://linktr.ee/4700enterprises", 
  },
  { 
    artistName: 'Baloww',
    src: Baloww,
    bio: 'Baloww is an Artist from North Miami, Florida. An artist since 2014, his style is versatile and infectious. His approach towards music has been genuine and ear bending. Check out his latest release',
    iframe: "https://open.spotify.com/embed/track/0jEI4DczSNgMrFQTAArhfm?utm_source=generator",
    artistLink: "https://linktr.ee/4700enterprises", 
  },
  { 
    artistName: 'Timothy Branch',
    src: TimothyBranch,
    bio: 'Timothy Branch is known for his thought-provoking instrumentals and intricate song arrangements. His records are both intenstifying and calming',
    iframe: "https://open.spotify.com/embed/track/3im0wQm6ortZ4o5copBm7j?utm_source=generator",
    artistLink: "https://linktr.ee/4700enterprises", 
  },
  { 
    artistName: 'Big Geech',
    src: bigGeech,
    bio: 'Big Geech brings a powerful presence and unique style to the music scene. Being an artist for 8+ years has allowed him to bring a level of experience to the team',
    iframe: "https://open.spotify.com/embed/track/6DZGqk8xii6XFq3kY5LVbG?utm_source=generator",
    artistLink: "https://linktr.ee/4700enterprises", 
  },
  { 
    artistName: 'CJ Ali',
    src: cjAli,
    bio: 'CJ Ali captivates audiences with his engaging performances and heartfelt music. His drumming ability has made for some of the best records',
    iframe: "https://open.spotify.com/embed/track/21bDVDFPc2KsKAvZztyCWk?utm_source=generator",
    artistLink: "https://linktr.ee/4700enterprises", 
  },
];






const ArtistSection = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const handleImageClick = (index) => {
    setSelectedImage(index === selectedImage ? null : index);
  };

  return (
    <div className={`artist-section ${inView ? 'visible' : ''}`} id="Artist" ref={ref}>
      <h1>Our Roster</h1>
      <div className="image-accordion">
        {images.map((image, index) => (
          <div key={index} className="image-container">
            <div 
              className={`image-wrapper ${selectedImage === index ? 'active' : ''}`}
              onClick={() => handleImageClick(index)}
            >
              <img 
                src={image.src} 
                alt={`Image ${index + 1}`} 
                className="accordion-image"
              />
              <div className="hover-content">
                <h2>{image.artistName}</h2>
                <button><a href={image.artistLink}>Learn More</a></button>
              </div>
            </div>
            {selectedImage === index && (
              <div className="hidden-content">
                <h1>{image.artistName}</h1>
                <p>{image.bio}</p>
                <iframe 
                  style={{ borderRadius: '12px' }} 
                  src={image.iframe}
                  width="100%" 
                  height="332" 
                  frameBorder="0" 
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                  loading="lazy"
                ></iframe>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArtistSection;