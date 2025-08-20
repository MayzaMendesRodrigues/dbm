import './NavBar.css'

import { Link } from 'react-router-dom';
import logoImage from '../../../assets/images/dbmred.svg';
import { useState, useEffect } from 'react';
import { pushEvent, EventAnalytics } from '../../../analytics/analytics';
import { Pages } from '../../../constants/constants';

const pagesLinks = [
  {
    text: Pages.Home.label,
    url: Pages.Home.url,
    nav: true,
  },
  {
    text: Pages.Catalog.label,
    url: Pages.Catalog.url,
    nav: true,
    analytics: EventAnalytics.NavLinkCatalog,
  },
  {
    text: Pages.SellMyBike.label,
    url: Pages.SellMyBike.url,
    nav: true,
    analytics: EventAnalytics.NavLinkSellMyBike,
  },
  {
    text: Pages.Contact.label,
    url: Pages.Contact.url,
    nav: false,
    analytics: EventAnalytics.NavLinkContact,
  },
]

const NavBar: React.FC = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMobileMenuOpen(prevState => {
      if (!prevState) {
        pushEvent(EventAnalytics.HamburguerButton);
      }
      return !prevState;
    });
  };

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'unset';
  }, [isMobileMenuOpen])

  const handleNavClick = (pageIndex: number) => {
    if (pagesLinks[pageIndex].analytics) {
      pushEvent(pagesLinks[pageIndex].analytics!!)
    }
  }

  const nav = (
    <nav>
      <ul>
        {pagesLinks.map((item, index) => (
          <li key={item.text} onClick={() => handleNavClick(index)} >
            {item.nav ? <Link to={item.url}>{item.text}</Link>
              : <a href={item.url} rel="noreferrer" target="_blank">{item.text}</a>}
          </li>
        ))}
      </ul >
    </nav>
  )


  return (
    <div className="navbar">
      <div className="navbar-container container">
        <Link to="/">
          <img className="navbar-logo" src={logoImage} alt="DBM Concesionario de Motos Usadas" />
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
    </div>
  );
};

export default NavBar;
