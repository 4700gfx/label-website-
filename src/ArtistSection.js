import React, { useState } from 'react';

const artists = [
  {
    name: 'Baloww',
    image: './assets/images/balow.png',
    spotifyEmbed: (
      <iframe
        style={{ borderRadius: '12px' }}
        src="https://open.spotify.com/embed/track/2Xhqd10lVkPMo8FxtidesP?utm_source=generator"
        width="100%"
        height="352"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        title="Artist 1 Spotify Embed"
      ></iframe>
    ),
  },
  {
    name: 'Artist 2',
    image: './assets/images/artist2.jpg',
    spotifyEmbed: (
      <iframe
        style={{ borderRadius: '12px' }}
        src="https://open.spotify.com/embed/track/track_id_2"
        width="100%"
        height="352"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        title="Artist 2 Spotify Embed"
      ></iframe>
    ),
  },

  {
    name: 'Artist 3',
    image: './assets/images/artist3.jpg',
    spotifyEmbed: (
      <iframe
        style={{ borderRadius: '12px' }}
        src="https://open.spotify.com/embed/track/track_id_3"
        width="100%"
        height="352"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        title="Artist 3 Spotify Embed"
      ></iframe>
    ),
  },

  {
    name: 'Artist 4',
    image: './assets/images/artist4.jpg',
    spotifyEmbed: (
      <iframe
        style={{ borderRadius: '12px' }}
        src="https://open.spotify.com/embed/track/track_id_4"
        width="100%"
        height="352"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        title="Artist 4 Spotify Embed"
      ></iframe>
    ),
  },

  {
    name: 'Artist 4',
    image: './assets/images/artist4.jpg',
    spotifyEmbed: (
      <iframe
        style={{ borderRadius: '12px' }}
        src="https://open.spotify.com/embed/track/track_id_4"
        width="100%"
        height="352"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        title="Artist 4 Spotify Embed"
      ></iframe>
    ),
  },


  {
    name: 'Artist 4',
    image: './assets/images/artist4.jpg',
    spotifyEmbed: (
      <iframe
        style={{ borderRadius: '12px' }}
        src="https://open.spotify.com/embed/track/track_id_4"
        width="100%"
        height="352"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        title="Artist 4 Spotify Embed"
      ></iframe>
    ),
  },


  {
    name: 'Artist 4',
    image: './assets/images/artist4.jpg',
    spotifyEmbed: (
      <iframe
        style={{ borderRadius: '12px' }}
        src="https://open.spotify.com/embed/track/track_id_4"
        width="100%"
        height="352"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        title="Artist 4 Spotify Embed"
      ></iframe>
    ),
  },



];

const ArtistSection = () => {
  const [activeArtist, setActiveArtist] = useState(null);

  const handleArtistClick = (index) => {
    setActiveArtist(activeArtist === index ? null : index);
  };

  return (
    <section className="artist-section">
      <h1>Artists</h1>
      <div className="accordion">
        {artists.map((artist, index) => (
          <div
            key={index}
            className={`accordion-item ${activeArtist === index ? 'active' : ''}`}
            onClick={() => handleArtistClick(index)}
          >
            <img src={artist.image} alt={artist.name} className="artist-image" />
            <div className="overlay">
              <h2>{artist.name}</h2>
            </div>
            {activeArtist === index && (
              <div className="spotify-embed">
                {artist.spotifyEmbed}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ArtistSection;


