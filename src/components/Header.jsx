import './Header.css';
import logo from '../assets/images/southern-nevada-logo.jpg';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <div className="logo-image">
            <img src={logo} alt="Southern Nevada Living Logo" />
          </div>
          <div className="logo-text">
            <h1>Southern Nevada Living</h1>
            <p>Your Key to Real Estate Success</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;