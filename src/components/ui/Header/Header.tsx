import './Header.css';
import { Link } from 'react-router-dom';
import logoImage from '../../../assets/images/dbmred.svg';
import { useState, useEffect } from 'react';
import { pushEvent, EventAnalytics } from '../../../analytics/analytics';

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
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMobileMenuOpen(prevState => {
      if (!prevState) {
        pushEvent(EventAnalytics.BurguerButton);
      }
      return !prevState;
    });
  };

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'unset';
  }, [isMobileMenuOpen])

  const addNavItems = (items: NavItem[]) => {
    return items.map((item) => (
      <li key={item.text} >
        {
          item.url.startsWith('/') ? (
            <Link to={item.url}>{item.text}</Link>
          ) : (
            <a href={item.url}>{item.text}</a>
          )
        }
      </li>
    ))
  }

  const nav = (
    <nav>
      <ul>
        {addNavItems(pagesLinks)}
        {addNavItems(navItems)}
      </ul >
    </nav>
  )

  return (
    <header className="Header">
      <div className="Header-container container">
        <Link to="/">
          <img className="Header-logo" src={logoImage} alt="DBM Red Logo" />
        </Link>
        <div className="desktop-nav">
          {nav}
        </div>

        <button className="mobile-menu-button" onClick={handleMenuToggle} aria-label="Open menu">
          <span></span>
          <span></span>
          <span></span>
        </button>

        {isMobileMenuOpen && (
          <div className={`mobile-nav ${isMobileMenuOpen ? 'open' : ''}`}>
            {nav}
          </div>)
        }
      </div>
    </header>
  );
};

export default Header;
