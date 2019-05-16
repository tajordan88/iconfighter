import { combineReducers } from 'redux';

import GameType from './reducer_gametype';

const rootReducer = combineReducers({
  gametype: GameType
});

export default rootReducer;