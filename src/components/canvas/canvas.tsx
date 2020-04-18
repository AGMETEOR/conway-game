import React from 'react';
import './canvas.css';

type Grid = Array<Array<number>>;

type State = {
    resolution: number;
    cols: number;
    rows: number;
    grid: Grid;
}

class Canvas extends React.Component<{}, State> {

    private myRef?: any;
    private width: any;
    private height: any;

    // Give props a TS type
    constructor(props: any) {
        super(props);

        this.myRef = React.createRef();

        const resolution = 5;
        this.width = 400;
        this.height = 400;
        const cols = this.width / resolution;
        const rows = this.height / resolution;
        const grid = this.make2DArray(cols, rows);

        this.state = {
            resolution,
            cols,
            rows,
            grid,
        }
    }

    make2DArray = (cols: number, rows: number) => {
        let arr = new Array(cols);
        for (let i = 0; i < arr.length; i++) {
            arr[i] = new Array(rows);
        }

        this.fillGrid(arr, cols, rows);

        return arr;
    }

    fillGrid = (grid: Grid, cols: number, rows: number) => {
        for (let i = 0; i < cols; i++) {
            for (let j = 0; j < rows; j++) {
                grid[i][j] = Math.round(Math.random());
            }
        }

        return grid;
    }

    drawCanvas = () => {
        for (let i = 0; i < this.state.cols; i++) {
            for (let j = 0; j < this.state.rows; j++) {
                let x = i * this.state.resolution;
                let y = j * this.state.resolution;

                const c = this.myRef.current;
                const cAny = c as any;
                const ctx = cAny.getContext("2d");

                ctx.beginPath();
                ctx.rect(x, y, this.state.resolution, this.state.resolution);

                if (this.state.grid[i][j] === 1) {
                    ctx.fillStyle = "black";
                    ctx.fill();
                }

                ctx.stroke();
            }
        }
    }

    componentDidMount() {
        this.drawCanvas();
    }

    render() {
        const style = {
            width: this.width,
            height: this.height,
        }
        return (
            <div className="conway-game__canvas">
                <div style={style}>
                    <canvas ref={this.myRef} width={this.width} height={this.width} />
                </div>
            </div>
        );
    }
}

export default Canvas;