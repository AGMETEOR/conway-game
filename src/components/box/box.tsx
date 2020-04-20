import React from 'react';

type Props = {
    boxClass: string;
    boxId: string;
    row: number;
    col: number;
    selectBox: any;
}

class Box extends React.Component<Props, {}> {
    selectBox = () => {
        const {row, col, selectBox} = this.props;
        selectBox(row, col);
    }

    render(){
        const {boxClass, boxId} = this.props;
        return (
            <div 
            data-testid={boxId}
            className={boxClass}
            id={boxId}
            onClick={this.selectBox}
           />
        )
    }
}

export default Box;