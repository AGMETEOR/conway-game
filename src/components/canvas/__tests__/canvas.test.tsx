import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Canvas from '../canvas';
import { make2DArray, bootstrapConstantGrid } from '../../../utils/helpers';

afterEach(cleanup);


describe('Canvas', () => {
    const grid = bootstrapConstantGrid(make2DArray(30, 30), 30, 30)
    const props = {
        gridFull: grid,
        cols: 30,
        rows: 30,
        selectBox: jest.fn(),
    };

  it('should match stored snapshot', () => {
    const { asFragment } = render(<Canvas {...props} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should have boxes at certain grid points', () => {
    const { getByTestId } = render(<Canvas {...props} />);
    const canvas = getByTestId('canvas');

    // cell at 0,0
    const firstCell = getByTestId('0_0');

    // cell at rows - 1, cols - 1
    const lastCell = getByTestId(`${props.rows - 1}_${props.cols - 1}`);
    expect(canvas).toContainElement(firstCell);
    expect(canvas).toContainElement(lastCell);
  });
});

export {}

