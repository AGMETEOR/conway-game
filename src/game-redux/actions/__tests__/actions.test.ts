import { TOGGLE_PLAY } from "../../actionTypes";
import { play } from "..";

describe('actions', () => {
    it('should create an action to stop game', () => {
      const playStatus = false;
      const expectedAction = {
        type: TOGGLE_PLAY,
        data: playStatus,
      }
      expect(play(playStatus)).toEqual(expectedAction)
    })
  });