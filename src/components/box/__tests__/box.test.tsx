import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import Box from '../box';

afterEach(cleanup);


describe('Box', () => {
  const props = {
    row: 5,
    col: 5,
    boxClass: "",
    boxId: 'test-id',
    selectBox: jest.fn(),
  }
  
  it('should match stored snapshot', () => {
    const { asFragment } = render(<Box {...props} />);
    expect(asFragment()).toMatchSnapshot();
  });
  
  it('should call selectBox when clicked', () => {
    const { getByTestId } = render(<Box {...props} />);
  
    // component test id is prepared using the boxid
    fireEvent.click(getByTestId(props.boxId));
    expect(props.selectBox).toHaveBeenCalled();
  });

});

