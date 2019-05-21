import { CHARACTER_CONFIRM_1 } from './types';

export function onCharacterConfirm1Click(confirmed) {  
  return {
    type: CHARACTER_CONFIRM_1,
    payload: {
      confirmed
    }
  };
}
