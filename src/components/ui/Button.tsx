import './Button.css';
import React from 'react';
import { Link } from 'react-router-dom';

type ButtonVariant = 'primary' | 'outline';
const variants = {
  primary: 'Button',
  outline: 'Button ButtonOutline',
};

interface ButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  text?: string;
  variant?: ButtonVariant;
  children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  text,
  children,
  href,
  variant = 'primary',
  style,
  ...rest
}) => {
  const className = variants[variant];

  const isExternal = /^https?:\/\//.test(href);

  if (isExternal) {
    return (
      <a
        href={href}
        className={className}
        style={style}
        target="_blank"
        rel="noopener noreferrer"
        {...rest}
      >
        {text}
        {children}
      </a>
    );
  }

  return (
    <Link to={href} className={className} style={style} {...rest}>
      {text}
      {children}
    </Link>
  );
};

export default Button;

