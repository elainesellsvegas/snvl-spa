import './ShowBio.css';

const ShowBio = ({ title, subtitle, description }) => {
  return (
    <section className="show-bio">
      <div className="container">
        <div className="bio-content">
          <h2>{title}</h2>
          <h3>{subtitle}</h3>
          <div className="description">
            {description.split('\n\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowBio;