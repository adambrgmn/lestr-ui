// @flow

import wrapper from './wrapper';
import Reactions from '../components/Reactions';

const onReaction = (e) => console.log(e);
const states = [
  {
    name: 'No reaction',
    props: {
      onReaction,
    }
  },
  {
    name: 'With reaction count',
    props: {
      reactionCount: Math.floor(Math.random() * 100),
      onReaction,
    }
  },
  {
    name: 'With reaction',
    props: {
      currentReaction: 'happy',
      reactionCount: 1,
      onReaction,
    }
  }
];

export default wrapper(states)(Reactions);
