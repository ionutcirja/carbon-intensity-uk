import React from 'react';
import { getByText, render } from '@testing-library/react';
import Component from '..';

describe('FuelLevel component', () => {
  const props = {
    name: 'coal',
    percentage: 2,
  };

  it('should render the name of the fuel', () => {
    const { container } = render(<Component {...props} />);
    expect(getByText(container, props.name)).toBeDefined();
  });

  it('should render the fuel percentage', () => {
    const { container } = render(<Component {...props} />);
    expect(getByText(container, props.percentage.toString())).toBeDefined();
  });
});
