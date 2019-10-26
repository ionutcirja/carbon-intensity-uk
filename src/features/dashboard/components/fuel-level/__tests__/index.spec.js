import React from 'react';
import { getByText, render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import Component from '..';

describe('FuelLevel component', () => {
  const theme = {
    colors: {
      blue: 'blue',
      darkBlue: 'dark blue',
      red: 'red',
      white: 'white',
    },
    breakpoints: {
      small: 'small',
    },
  };
  const props = {
    name: 'coal',
    percentage: 2,
  };

  it('should render the name of the fuel', () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <Component {...props} />
      </ThemeProvider>,
    );
    expect(getByText(container, props.name)).toBeDefined();
  });

  it('should render the fuel percentage', () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <Component {...props} />
      </ThemeProvider>,
    );
    expect(getByText(container, `${props.percentage}%`)).toBeDefined();
  });
});
