import { TOGGLE_PLAY } from '../actionTypes';
import { GameAction } from '../types';

export function play(gameStatus: boolean): GameAction {
  return { type: TOGGLE_PLAY, data: gameStatus };
}
