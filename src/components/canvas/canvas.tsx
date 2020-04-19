import React from 'react';
import { Grid } from '../game/game';
import Box from '../box/box';
import './canvas.css';

type Props = {
    gridFull: Grid;
    cols: number;
    rows: number;
    selectBox: (row: number, col: number) => void;
}

class Canvas extends React.Component<Props, {}> {
    render(){
        const { cols, rows, gridFull, selectBox } = this.props;
        const width = cols * 14;
        let rowsArr = [];
        let boxClass = ""

        for( let i = 0; i < rows; i++){
            for( let j = 0; j < rows; j++){
                let boxId = i + "_" + j
                boxClass = gridFull[i][j] === 1 ? "box on" : "box off";
                rowsArr.push(
                <Box 
                boxClass={boxClass} 
                key={boxId} 
                boxId={boxId} 
                row={i} 
                col={j}
                selectBox={selectBox}
                 />);
            }
        }
        return(
            <div className="grid" style={{width: width}}>
                {rowsArr}
            </div>
        )
    }
}

export default Canvas;