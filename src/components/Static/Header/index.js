import React from 'react';
import { Link } from 'react-router';
import './style.css';

const Header = () => (
  <header className="header mb4">
    <div className="header-logotype__container w-20 dib">
      <svg className="header-logotype w-100 db" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600">
        <path className="header-logotype__path" d="M575 25v550H25V25h550m25-25H0v600h600V0z"/>
        <path className="header-logotype__path" d="M45 45v510h510V45zm255 450a40 40 0 1 1 40-40 40 40 0 0 1-40 40zm0-155a40 40 0 1 1 40-40 40 40 0 0 1-40 40zm0-156a40 40 0 1 1 40-40 40 40 0 0 1-40 40z"/>
      </svg>
    </div>

    <h1 className="header-title f2 lh-solid dib ma0 ml2 normal">
      <Link to="/" className="link hover-orange white">Lestr UI</Link>
    </h1>
  </header>
);

export default Header;
