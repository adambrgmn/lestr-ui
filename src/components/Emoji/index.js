import React from 'react';
import classNames from 'classnames';
import './styles.css';

const emojis = {
  happy: '😬',
  sad: '😢',
  angry: '😡',
  surprised: '😳',
  wondering: '🤔',
  default: '😶',
};

export default ({ emoji, bw }) => {
  const cxEmoji = {
    emoji: true,
    f4: true,
    'emoji--bw': bw,
  };

  return (
    <span className={classNames(cxEmoji)}>{emojis[emoji || 'default']}</span>
  );
};
