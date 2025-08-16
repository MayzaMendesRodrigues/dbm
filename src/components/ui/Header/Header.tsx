import './Header.css';
import { Link } from 'react-router-dom';
import logoImage from '../../../assets/images/dbmred.svg';
import { useState, useEffect } from 'react';
import { pushEvent, EventAnalytics } from '../../../analytics/analytics';

const pagesLinks = [
  { text: 'Inicio', url: '/', nav: true },
  { text: 'Catálogo', url: '/catalog', nav: true },
  { text: 'Contacto', url: 'https://wa.me/5491173608326?text=Hola,%20quiero%20información%20sobre%20sus%20motos', nav: false },
]

const Header: React.FC = () => {
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

  const nav = (
    <nav>
      <ul>
        {pagesLinks.map((item) => (
          <li key={item.text} >
            {item.nav ? <Link to={item.url}>{item.text}</Link>
              : <a href={item.url} rel="noreferrer" target="_blank">{item.text}</a>}
          </li>
        ))}
      </ul >
    </nav>
  )

  return (
    <header className="Header">
      <div className="Header-container container">
        <Link to="/">
          <img className="Header-logo" src={logoImage} alt="DBM Concesionario de Motos Usadas" />
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
