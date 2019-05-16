import { GAME_TYPE } from './types';

export function onGameTypeClick(gametype) {
  console.log("reducer");
  console.log(gametype);
  return {
    type: GAME_TYPE,
    payload: gametype
  };
}
