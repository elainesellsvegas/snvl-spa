import './FeaturedEpisodes.css';

const FeaturedEpisodes = () => {
  const featuredLinks = [
    {
      title: "Mayor Michelle Romero",
      url: "https://heyvegastv.lightcast.com/player/42909/42909"
    },
    {
      title: "Former Mayor Debra March", 
      url: "https://heyvegastv.lightcast.com/player/46226/753296"
    },
    {
      title: "Lawyers Title",
      url: "https://heyvegastv.lightcast.com/player/46226/751915"
    }
  ];

  return (
    <section className="featured-episodes">
      <div className="container">
        <h3>More Featured Episodes</h3>
        <div className="episodes-grid">
          {featuredLinks.map((link, index) => (
            <a 
              key={index} 
              href={link.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="episode-card"
            >
              <h4>{link.title}</h4>
              <span>Watch Episode →</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedEpisodes;