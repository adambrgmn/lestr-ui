// @flow

import { compose } from 'ramda';
import { kebabCase } from 'lodash/fp';

const addSlash = (str: string) => `/${str}`;
export default compose(addSlash, kebabCase);
