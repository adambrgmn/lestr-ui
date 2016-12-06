// @flow

import React, { Component } from 'react';

import 'tachyons';
import './App.css';

import Sidebar from './components/Static/Sidebar';
import Header from './components/Static/Header';
import Navigation from './components/Static/Navigation';
import Main from './components/Static/Main';


class App extends Component {
  render() {
    let i = 0;
    let navItems = [];
    for (i; i < 50; i += 1) {
      navItems = [...navItems, { text: `Component ${i}`, link: `/component${i}` }];
    }

    return (
      <div className="container w-100 sans-serif">
        <Sidebar>
          <Header />
          <Navigation navItems={navItems} />
        </Sidebar>
        <Main>
          <div>Hello world</div>
        </Main>
      </div>
    );
  }
}

export default App;
