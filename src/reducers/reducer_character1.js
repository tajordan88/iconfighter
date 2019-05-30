import { CHARACTER_SELECT_1, CHARACTER_CONFIRM_1 } from '../actions/types';

let initialState = {
  name: '',
  hp: 100,
  sp: 100,
  atk: 5,
  def: 2,
  hand1: '',
  hand2: '',
  head: '',
  chest: '',
  legs: '',
  feet: '',
  special1icon: null,
  special1name: '',
  special1dmg: '',
  special1spcost: '',
  special1cth: '',
  special1cc: '',
  special2icon: null,
  special2name: '',
  special2dmg: '',
  special2spcost: '',
  special2cth: '',
  special2cc: '',
  selected: 0,
  confirmed: 0
}

export default function(state = initialState, action) {
  switch (action.type) {
    case CHARACTER_SELECT_1:
      return action.payload || false;
    case CHARACTER_CONFIRM_1:
      return {
        ...state,
        confirmed: 1
      }
    default:
      return state;
  }
}
