import { CHARACTER_SELECT_1 } from './types';

export function onCharacterSelect1Click(character) {
  console.log("reducer");
  console.log(character);
  return {
    type: CHARACTER_SELECT_1,
    payload: character
  };
}
