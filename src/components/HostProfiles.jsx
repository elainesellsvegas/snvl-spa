import './HostProfiles.css';

const HostProfiles = ({ hosts }) => {
  return (
    <section className="host-profiles">
      <div className="container">
        <h2>Meet Your Hosts</h2>
        <div className="hosts-grid">
          {hosts.map((host) => (
            <div key={host.id} className="host-card">
              <div className="host-image">
                <img src={host.image} alt={host.name} />
              </div>
              <div className="host-info">
                <h3>{host.name}</h3>
                <h4>{host.title}</h4>
                <p className="host-subtitle">{host.subtitle}</p>
                <div className="host-bio">
                  {host.bio.split('\n\n').map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HostProfiles;