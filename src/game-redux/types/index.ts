// Global game state type
export type GameState = {
    start: boolean;
    dimensions: Dimensions;
};

type Dimensions = {
    rows: number;
    cols: number;
}

// Redux actions types
export type GameAction = {
    type: string;
    data?: any;
    error?: string;
};

export type GetStateFunc = () => GameState;
export type DispatchFunc = (action: GameAction, getState?: GetStateFunc | null) => Promise<ActionResult>;

export type ActionResult = {
    data: any;
} | {
    error: any;
};