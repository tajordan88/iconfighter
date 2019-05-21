import { GAME_TYPE } from './types';

export function onGameTypeClick(gametype) {
  return {
    type: GAME_TYPE,
    payload: gametype
  };
}
