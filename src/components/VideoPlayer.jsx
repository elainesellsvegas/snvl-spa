import './VideoPlayer.css';

const VideoPlayer = ({ src, title, description }) => {
  return (
    <section className="video-section">
      <div className="container">
        <h2>{title}</h2>
        <div className="video-wrapper">
          <iframe
            src={src}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="video-iframe"
          ></iframe>
        </div>
        <p className="video-description">{description}</p>
      </div>
    </section>
  );
};

export default VideoPlayer;