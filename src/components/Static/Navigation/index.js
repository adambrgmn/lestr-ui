// @flow
import React from 'react';
import { Link } from 'react-router';
import descriptionToUrl from '../../../utils/descriptionToUrl';
import './style.css';

type NavItem = {
  description: string,
  link: string,
};

type NavItems = NavItem[]

const mapNavItems = (navItems: NavItems) => navItems.map(({ description }) => (
  <li key={description} className="navigation-list__item mv1">
    <Link
      to={descriptionToUrl(description)}
      className="navigation-list__link link underline-hover white hover-orange"
      activeClassName="orange"
    >
      {description}
    </Link>
  </li>
));

const Navigation = ({ navItems }: { navItems: NavItems }) => (
  <nav className="navigation">
    <ul className="navigation-list list pl3 ma0">
      {mapNavItems(navItems)}
    </ul>
  </nav>
);

export default Navigation;
