import React from 'react';
import './Header.css';

type HeaderProps = {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({ title, subtitle, children }) => {
  return (
    <div className="header">
      <h2 className="title">{title}</h2>
      {subtitle && (<p className="subtitle">
        {subtitle}
      </p>)}
      {children}
    </div>
  );
};

export default Header;
