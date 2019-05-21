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
