import './Header.css';
import { Link } from 'react-router-dom';
import logoImage from '../../../assets/images/dbmred.svg';
import { useState } from 'react';

interface NavItem {
  text: string;
  url: string;
}

interface HeaderProps {
  navItems?: NavItem[];
}

const pagesLinks = [
  { text: 'Inicio', url: '/' },
  { text: 'Catálogo', url: '/catalog' },
]

const Header: React.FC<HeaderProps> = ({ navItems = [] }) => {
  const [menuActive, setMenuActive] = useState(false);

  const handleMenuToggle = () => {
    setMenuActive((prev) => !prev);
  };

  return (
    <header>
      <div className="Header container Header-container">
        <Link to="/">
          <img className="Header-logo" src={logoImage} alt="DBM Red Logo" />
        </Link>

        <nav>
          <ul className={menuActive ? 'active' : ""}>
            {pagesLinks.map((pageLink) => (
              <li key={pageLink.text} onClick={handleMenuToggle}>
                <Link to={pageLink.url}>{pageLink.text}</Link>
              </li>))}
            {navItems.map((item) => (
              <li key={item.text} onClick={handleMenuToggle}>
                <a href={item.url}>{item.text}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mobile-menu" onClick={handleMenuToggle}>
          <i className="fas fa-bars"></i>
        </div>

      </div>
    </header>
  );
};

export default Header;
