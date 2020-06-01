/* eslint-disable @typescript-eslint/no-explicit-any */
// Global game state type
export type GameState = {
  play: boolean;
};

// Redux actions types
export type GameAction = {
  type: string;
  data?: any;
  error?: string;
};
