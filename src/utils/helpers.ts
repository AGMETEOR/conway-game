import { Grid } from "../components/game/game";

export function make2DArray(cols: number, rows: number): Grid {
    let arr = new Array(cols);
    for (let i = 0; i < arr.length; i++) {
      arr[i] = new Array(rows);
    }

    return arr;
  }

export function bootstrapGrid(grid: Grid, cols: number, rows: number): Grid {
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        grid[i][j] = Math.round(Math.random());
      }
    }
    return grid;
  }

export function arrayClone(arr: Array<any>): Array<any> {
    return JSON.parse(JSON.stringify(arr));
}