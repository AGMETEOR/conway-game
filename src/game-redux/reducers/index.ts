import { combineReducers } from "redux";
import { GameAction } from "../types";
import { START_GAME } from "../actionTypes";

function start(state =  false, action: GameAction) {
    switch (action.type) {
        case START_GAME:
            return action.data;
    }
    return state;
}

export default combineReducers({
    start,
});