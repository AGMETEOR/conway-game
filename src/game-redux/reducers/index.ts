import { combineReducers } from 'redux';
import { GameAction } from '../types';
import { TOGGLE_PLAY } from '../actionTypes';

export function play(state = false, action: GameAction): boolean {
  switch (action.type) {
    case TOGGLE_PLAY:
      return action.data;
  }
  return state;
}

export default combineReducers({
  play,
});
