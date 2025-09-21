import './VideoPlayer.css';
import FeaturedEpisodes from './FeaturedEpisodes';

const VideoPlayer = ({ youtubeId, title, description }) => {
  const embedUrl = `https://www.youtube.com/embed/${youtubeId}`;
  
  return (
    <>
      <section className="video-section">
        <div className="container">
          <h2>{title}</h2>
          <div className="video-wrapper">
            <iframe
              src={embedUrl}
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="video-iframe"
            ></iframe>
          </div>
          <p className="video-description">{description}</p>
        </div>
      </section>
      <FeaturedEpisodes />
    </>
  );
};

export default VideoPlayer;