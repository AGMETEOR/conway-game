import { GameState } from "../types";

export function getGamePlayStatus(state: GameState): boolean {
    return state.play;
};