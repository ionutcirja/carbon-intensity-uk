import React from 'react';
import { getByText, render } from '@testing-library/react';
import Component from '..';

describe('Date component', () => {
  it('should render a formatted date (dd LLL yyyy HH:mm:ss)', () => {
    const { container } = render(<Component label="From" date="2019-10-25T09:30Z" />);
    expect(getByText(container, 'From: 25 Oct 2019 10:30:00')).toBeDefined();
  });
});
