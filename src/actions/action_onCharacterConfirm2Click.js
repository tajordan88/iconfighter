import { CHARACTER_CONFIRM_2 } from './types';

export function onCharacterConfirm2Click(confirmed) {  
  return {
    type: CHARACTER_CONFIRM_2,
    payload: {
      confirmed
    }
  };
}
