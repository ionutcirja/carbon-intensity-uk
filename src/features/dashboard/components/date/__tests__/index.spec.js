import React from 'react';
import { getByText, render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import Component from '..';

describe('Date component', () => {
  const theme = {
    colors: {
      darkBlue: 'dark blue',
    },
  };

  it('should render a formatted date (dd LLL yyyy HH:mm:ss)', () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <Component label="From" date="2019-10-25T09:30Z" />
      </ThemeProvider>,
    );
    expect(getByText(container, 'From: 25 Oct 2019 10:30:00')).toBeDefined();
  });
});
