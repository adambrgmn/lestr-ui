// @flow

import wrapper from './wrapper';
import Reactions from '../components/Reactions';

const onReaction = (reaction) => console.log(reaction);
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
      reactionCount: 138,
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
