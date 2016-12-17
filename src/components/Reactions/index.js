import React, { Component } from 'react';
import classNames from 'classnames';
import R from 'ramda';

import Emoji from '../Emoji';

import './styles.css';

const ReactionsButton = ({
  currentReaction,
  count,
  show,
  reacted,
  onMouseEnter,
  onMouseLeave,
  children,
}) => {
  const cxButton = {
    'reactions-button__button': true,
    bn: true,
    pointer: true,
    'lh-solid': true,
    pa2: true,
    show,
    reacted,
  };

  return (
    <div
      className="reactions-button__contianer relative dib"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <button className={classNames(cxButton)} type="button">
        <span className="reactions-button__reaction">
          <Emoji emoji={currentReaction} />
        </span>
      </button>

      <span className="reactions-button__count lh-solid pa0">
        {count}
      </span>

      {children}
    </div>
  );
};

const mapReactionsToButtons = (reactions, onClick) => R.map((reaction) => {
  const onButtonClick = (e) => {
    const event = { ...e, reaction };
    onClick(event);
  };
  return (
    <li key={reaction} className="reactions-reactions__list-item dib">
      <button
        className="reactions-reactions__button bg-transparent pointer lh-solid pa2 bn"
        type="button"
        onClick={onButtonClick}
      >
        <Emoji emoji={reaction} />
      </button>
    </li>
  );
}, reactions);

const ReactionsContainer = ({ reactions, show, onClick }) => {
  const cxContainer = {
    'reactions-reactions__container': true,
    absolute: true,
    show,
  };

  return (
    <div className={classNames(cxContainer)}>
      <ul className="reactions-reactions__list list ma0 pa0 flex flex-row">
        {mapReactionsToButtons(reactions, onClick)}
      </ul>
    </div>
  );
};

class Reactions extends Component {
  constructor(props: Props) {
    super(props);
    this.state = {
      showReactions: false,
    };
  }

  onMouseEnter = (): void => this.setState({ showReactions: true })
  onMouseLeave = (): void => this.setState({ showReactions: false })
  onReactionClick = (e: Event): void => {
    this.setState({ showReactions: false });
    this.props.onReaction(e);
  }

  render() {
    const { showReactions } = this.state;
    const {
      currentReaction,
      reactionCount,
      reactions,
    } = this.props;

    return (
      <div className="reactions-container">
        <ReactionsButton
          currentReaction={currentReaction}
          count={reactionCount}
          show={showReactions}
          reacted={currentReaction !== 'default'}
          onMouseEnter={this.onMouseEnter}
          onMouseLeave={this.onMouseLeave}
        >
          <ReactionsContainer
            reactions={reactions}
            show={showReactions}
            onClick={this.onReactionClick}
          />
        </ReactionsButton>
      </div>
    );
  }
}

Reactions.defaultProps = {
  reactions: ['happy', 'sad', 'angry', 'surprised', 'wondering', 'default'],
  currentReaction: 'default',
  reactionCount: 0,
};

export default Reactions;
