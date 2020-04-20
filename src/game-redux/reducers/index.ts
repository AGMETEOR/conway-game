import { combineReducers } from "redux";
import { GameAction } from "../types";
import { TOGGLE_PLAY } from "../actionTypes";

function play(state =  false, action: GameAction) {
    switch (action.type) {
        case TOGGLE_PLAY:
            return action.data;
    }
    return state;
}

export default combineReducers({
    play,
});