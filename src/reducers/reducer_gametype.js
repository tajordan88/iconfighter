import { GAME_TYPE } from '../actions/types';

export default function(state = null, action) {
  switch (action.type) {
    case GAME_TYPE:
      return action.payload || false;
    default:
      return state;
  }
}
