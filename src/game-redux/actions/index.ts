import {TOGGLE_PLAY} from '../actionTypes';

export function play(gameStatus: boolean) {
    return {type: TOGGLE_PLAY, data: gameStatus};
};