import { TOGGLE_PLAY } from "../../actionTypes";
import { play } from "..";

describe('actions', () => {
    it('should return default false state', () => {
      const action = {
        type: 'NON_EXISTENT_TYPE',
        data: true,
      }
      expect(play(false, action)).toEqual(false);
    });

    it('should return true for TOGGLE_PLAY', () => {
        const action = {
          type: TOGGLE_PLAY,
          data: true,
        }
        expect(play(false, action)).toEqual(true);
      });
  });