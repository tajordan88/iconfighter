import { combineReducers } from 'redux';

import GameType from './reducer_gametype';
import Character1 from './reducer_character1';
import Character2 from './reducer_character2';

const rootReducer = combineReducers({
  gametype: GameType,
  character1: Character1,
  character2: Character2
});

export default rootReducer;