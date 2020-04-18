import {START_GAME} from '../actionTypes';
import { DispatchFunc, GetStateFunc } from '../types';

export function start() {
    return (dispatch: DispatchFunc, getState: GetStateFunc) => {
        dispatch({type: START_GAME}, getState);
    }
}