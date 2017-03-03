import { combineReducers } from 'redux';

import game from './game';
import user from './user';
import runtime from './runtime';
import messages from './messages';

export default combineReducers({
  user,
  game,
  runtime,
  messages,
});
