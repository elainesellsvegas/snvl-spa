import './Header.css';
import logo from '../assets/images/southern-nevada-logo.jpg';

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="Southern Nevada Living Logo" className="logo-image" />
      </div>
    </header>
  );
};

export default Header;