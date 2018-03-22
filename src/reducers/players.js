import { PLAYERS__ADD } from '../constants/players';

export default function playersReducre(state = [], action) {
  switch (action.type) {
    case PLAYERS__ADD:
      return [...state, ...action.players];

    default:
      return state;
  }
}
