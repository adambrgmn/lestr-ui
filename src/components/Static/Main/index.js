// @flow
import React from 'react';
import './style.css';

type Props = {
  children?: React$Element<any>,
};

const Main = ({ children }: Props) => (
  <main className="main w-75 fr pa2">{children}</main>
);

export default Main;
