// @flow

import React, { Component } from 'react';
import { BrowserRouter, Match } from 'react-router';
import descriptionToUrl from './utils/descriptionToUrl';

import 'tachyons';
import './App.css';

import Sidebar from './components/Static/Sidebar';
import Header from './components/Static/Header';
import Navigation from './components/Static/Navigation';
import Main from './components/Static/Main';

import Reactions from './wrappedComponents/Reactions';

const Home = () => (<h1>Start</h1>);

const mapRoutes = (routes) => routes.map(({ description, Component }) => (
  <Match key={description} pattern={descriptionToUrl(description)} component={Component} />
));

class App extends Component {
  render() {

    const routes = [
      {
        description: 'Reactions',
        Component: Reactions,
      },
    ];

    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div className="container w-100">
          <Sidebar>
            <Header />
            <Navigation navItems={routes} />
          </Sidebar>
          <Main>
            <Match exactly pattern="/" component={Home} />
            {mapRoutes(routes)}
          </Main>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
