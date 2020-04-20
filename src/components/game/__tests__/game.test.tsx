import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Game from '../game';
import { bootstrapConstantGrid } from '../../../utils/helpers';

afterEach(cleanup);


describe('Game', () => {
  const props = {
    gamePlayStatus: false,
    actions: {play: jest.fn()},
    bootstrapGrid: bootstrapConstantGrid,
  }
  
  it('should match stored snapshot', () => {
    const { asFragment } = render(<Game {...props} />);
    expect(asFragment()).toMatchSnapshot();
  });
});

