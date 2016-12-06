// @flow
import React from 'react';
import classNames from 'classnames';

type Props = {
  currentReaction?: string,
  reactionCount?: number,
  reactions?: { [key: string]: string },
  onReaction: () => void,
};

const defaultReactions = {
  happy: '😬',
  sad: '😢',
  angry: '😡',
  surprised: '😳',
  wondering: '🤔',
  default: '😶',
};

const mapReactionsToButtons = (reactions: { [key: string]: string }): React$Element<*>[] => {
  return Object
    .keys(reactions)
    .map((reaction: string) => (
      <li key={reaction} className="reactions-reactions__list-item dib">
        <button
          className="reactions-reactions__button pointer"
          type="button"
        >
          {reactions[reaction]}
        </button>
      </li>
    ));
};

const Reactions = ({
  currentReaction = 'default',
  reactionCount = 0,
  reactions = defaultReactions,
  onReaction
}: Props) => {
  const cxButtonButton = {
    'reactions-button__button': true,
    'bg-transparent': true,
    bn: true,
    pointer: true,
    'w1': true,
    'h1': true,
  };

  return (
    <div className="reactions-container">
      <div className="reactions-button__contianer">
        <button className={classNames(cxButtonButton)} type="button">
          <span className="reactions-button__reaction mh1">
            {reactions[currentReaction]}
          </span>

          <span className="reactions-button__count mh1">
            {reactionCount}
          </span>
        </button>
      </div>

      <div className="reactions-reactions__container">
        <ul className="reactions-reactions__list list ma0 pa0">
          {mapReactionsToButtons(reactions)}
        </ul>
      </div>
    </div>
  );
};

export default Reactions;
