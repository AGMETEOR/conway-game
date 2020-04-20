import React from 'react';
import Canvas from '../canvas/canvas';
import './game.css';
import { arrayClone, make2DArray, bootstrapGrid } from '../../utils/helpers';
import { GameAction } from '../../game-redux/types';

export type Grid = Array<Array<number>>;

type GameControlActions = {
  play: (x: boolean) => GameAction;
}

type Props = {
  gamePlayStatus: boolean;
  actions: GameControlActions;
}

type State = {
  generation: number;
  gridFull: Grid;
}

class Game extends React.Component<Props, State> {

  private speed?: number;
  private rows: number;
  private cols: number;
  private intervalId: any;

  constructor(props: any) {
    super(props);
    this.speed = 1000;
    this.rows = 30;
    this.cols = 30;

    this.state = {
      generation: 0,
      gridFull: bootstrapGrid(make2DArray(this.cols, this.rows), this.cols, this.rows),
    }
  }

  selectBox = (row: number, col: number) => {
    let gridCopy = arrayClone(this.state.gridFull);
    gridCopy[row][col] = gridCopy[row][col] === 1 ? 0 : 1;
    this.setState({
      gridFull: gridCopy
    });
  }

  play = () => {
    let g = this.state.gridFull;
    let g2 = arrayClone(this.state.gridFull);

    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        const neighbours = this.countCellNeighbours(g, i, j);
        const currentCellState = g[i][j];

        if (currentCellState === 1 && neighbours < 2) {
          g2[i][j] = 0;
        }

        if (currentCellState === 1 && neighbours > 3) {
          g2[i][j] = 0;
        }

        if (currentCellState === 1 && (neighbours === 3 || neighbours === 2)) {
          g2[i][j] = 1;
        }

        if (currentCellState === 0 && neighbours === 3) {
          g2[i][j] = 1;
        }

      }
    }

    this.setState({
      gridFull: g2,
      generation: this.state.generation + 1
    });
  }

  playButton = () => {
    // clearInterval(this.intervalId);
    const { actions } = this.props;
    actions.play(true);
    this.intervalId = setInterval(this.play, this.speed);
  }

  pauseButton = () => {
    clearInterval(this.intervalId);
    const { actions } = this.props;
    actions.play(false);
  }

  countCellNeighbours = (grid: Grid, x: number, y: number): number => {
    // destructure state
    let sum = 0;

    for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {
        let r = x + i;
        let c = y + j;

        // Treat the grid as if it were a globe
        // Edge points also have neighbours
        // A grid at the end of the col will have its direct neighbour at the beginning of col

        if (c < 0) {
          c = this.cols - 1;
        }

        if (c >= this.cols) {
          c = 0;
        }

        if (r < 0) {
          r = this.rows - 1
        }

        if (r >= this.rows) {
          r = 0
        }

        sum += grid[c][r];
      }
    }
    // Substract the current point from the count
    sum = sum - grid[x][y];

    return sum;
  }

  componentWillUnmount() {
    // clear all timers
    clearInterval(this.intervalId);
  }

  render() {
    const { gridFull } = this.state;
    const { gamePlayStatus } = this.props;
    return (
      <div className="conway-game conway-game--control-pane-expanded">
        <div className="conway-game__control-pane">
          <button className="conway-game__button" 
          onClick={gamePlayStatus ? () => this.pauseButton() : () => this.playButton()}>
            {gamePlayStatus ? 'Pause' : 'Play'}
          </button>
        </div>
        <div>
          <Canvas
            gridFull={gridFull}
            cols={this.cols}
            rows={this.rows}
            selectBox={this.selectBox} />
          <h1>Generations : {this.state.generation}</h1>
        </div>
      </div>
    );
  }
}

export default Game;