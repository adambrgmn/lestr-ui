// @flow

import React, { Component } from 'react';
import classNames from 'classnames';

type Props = {};
type ComponentProps = {
  name: string,
  props: { [key: string]: any }
};

type ComponentPropsArray = ComponentProps[];
type HocState = { componentProps: ComponentProps };

const wrapper = (componentProps: ComponentPropsArray) => (ComposedComponent: ReactClass<*>) => {
  return class Wrapper extends Component {
    state: HocState;
    props: Props;
    handleClick: () => void;

    constructor(props: Props) {
      super(props);
      this.state = { componentProps: componentProps[0] };
    }

    handleClick = (componentProps: ComponentProps) => this.setState({ componentProps: componentProps });

    render() {
      return (
        <div className="wrapper w-100">
          <nav className="wrapper-navigation mb3 bb pb2">
            <ul className="wrapper-navigation__list list pa0 ma0">
              <li className="wrapper-navigation__list-item light-silver dib">States:</li>
              {componentProps.map((state, i) => {
                const isActive = (this.state.componentProps.name === state.name);
                const cxButton = {
                  'wrapper-navigation__button': true,
                  'b--none': true,
                  'bg-transparent': true,
                  pa0: true,
                  link: true,
                  black: !isActive,
                  'underline-hover': !isActive,
                  'hover-orange': !isActive,
                  pointer: !isActive,
                  'light-silver': isActive,
                  underline: isActive,
                };


                return (
                  <li key={state.name} className="wrapper-navigation__list-item dib mh2">
                    <button
                      className={classNames(cxButton)}
                      onClick={() => this.handleClick(state)}
                      disabled={isActive}
                    >
                      {state.name}
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="wrapper-component">
            <ComposedComponent {...this.state.componentProps.props} />
          </div>
        </div>
      );
    }
  }
}

export default wrapper;
