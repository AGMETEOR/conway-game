import { GameState } from "../../types";
import { getGamePlayStatus } from "..";

describe('selectors', () => {
    it('should return play status given global game state', () => {
        const globalGameStatus: GameState = {
            play: false,
        };
      expect(getGamePlayStatus(globalGameStatus)).toEqual(false);
    })
  });