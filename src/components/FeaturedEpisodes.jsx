import './FeaturedEpisodes.css';
import { moreFeatured } from '../data/content.js';

const FeaturedEpisodes = () => {
  return (
    <section className="featured-episodes">
      <div className="container">
        <h3>More Featured Episodes</h3>
        <div className="episodes-grid">
          {moreFeatured.map((episode, index) => (
            <div key={index} className="episode-card">
              <div className="video-wrapper">
                <iframe
                  src={episode.src}
                  title={`Featured Episode ${index + 1}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="video-iframe"
                ></iframe>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedEpisodes;