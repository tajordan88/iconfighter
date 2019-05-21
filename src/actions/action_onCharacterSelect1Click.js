import { CHARACTER_SELECT_1 } from './types';
import characters from '../db/characters';

export function onCharacterSelect1Click(character) {
  let character1 = characters[character];  
  return {
    type: CHARACTER_SELECT_1,
    payload: character1
  };
}
