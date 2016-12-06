// @flow
import React from 'react';
import './style.css';

type NavItem = {
  text: string,
  link: string,
};

type NavItems = NavItem[]

const Navigation = ({ navItems }: { navItems: NavItems }) => (
  <nav className="navigation">
    <ul className="navigation-list list pl3 ma0">
      {navItems.map(({ text, link }) => (
        <li key={link} className="navigation-list__item mv1">
          <a href={link} className="navigation-list__link link underline-hover white hover-orange">
            {text}
          </a>
        </li>
      ))}
    </ul>
  </nav>
);

export default Navigation;
