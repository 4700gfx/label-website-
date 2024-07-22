import React, { useState } from 'react';
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
    bio: 'Blackmon Don is a Producer, Artist, Engineer and Founder from North Miami, Florida.',
    iframe: "https://open.spotify.com/embed/track/2Xhqd10lVkPMo8FxtidesP?utm_source=generator" 
  },
  { 
    artistName: 'Suppa',
    src: Kidd,
    bio: 'Suppa is a Producer, Manager and Founder from Miami Gardens, Florida.',
    iframe: "https://open.spotify.com/embed/track/2Xhqd10lVkPMo8FxtidesP?utm_source=generator" 
  },
  { 
    artistName: 'Chel',
    src: Chel,
    bio: 'Chel is a Producer, Executive and Engineer from Miramar, Florida.',
    iframe: "https://open.spotify.com/embed/track/2Xhqd10lVkPMo8FxtidesP?utm_source=generator" 
  },
  { 
    artistName: 'Miik',
    src: Miik,
    bio: '2k is a Producer, A&R, Executive and Engineer from Miramar, Florida.',
    iframe: "https://open.spotify.com/embed/track/2Xhqd10lVkPMo8FxtidesP?utm_source=generator" 
  },
  { 
    artistName: 'Baloww',
    src: Baloww,
    bio: 'Baloww is an Artist from North Miami, Florida. An artist since 2014, his style is versatile and infectious. His approach towards music has been genuine and ear bending.',
    iframe: "https://open.spotify.com/embed/track/2Xhqd10lVkPMo8FxtidesP?utm_source=generator" 
  },
  { 
    artistName: 'Timothy Branch',
    src: TimothyBranch,
    bio: 'Timothy Branch is known for his thought-provoking lyrics and smooth vocal delivery.',
    iframe: "https://open.spotify.com/embed/track/2Xhqd10lVkPMo8FxtidesP?utm_source=generator" 
  },
  { 
    artistName: 'Big Geech',
    src: bigGeech,
    bio: 'Big Geech brings a powerful presence and unique style to the music scene.',
    iframe: "https://open.spotify.com/embed/track/2Xhqd10lVkPMo8FxtidesP?utm_source=generator" 
  },
  { 
    artistName: 'CJ Ali',
    src: cjAli,
    bio: 'CJ Ali captivates audiences with his engaging performances and heartfelt music.',
    iframe: "https://open.spotify.com/embed/track/2Xhqd10lVkPMo8FxtidesP?utm_source=generator" 
  },
];

const ArtistSection = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (index) => {
    setSelectedImage(index === selectedImage ? null : index);
  };

  return (
    <div className="artist-section" id='Artist'>
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
                <button>Learn More</button>
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