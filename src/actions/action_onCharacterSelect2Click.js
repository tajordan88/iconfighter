import { CHARACTER_SELECT_2 } from './types';
import characters from '../db/characters';

export function onCharacterSelect2Click(character) {
  let character2 = characters[character];  
  return {
    type: CHARACTER_SELECT_2,
    payload: character2
  };
}
