import { GameState } from "../types";

export function getGameStartStatus(state: GameState): boolean {
    return state.start;
};