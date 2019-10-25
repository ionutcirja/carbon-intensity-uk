import React from 'react';
import { render } from '@testing-library/react';
import Component from '..';

describe('Date component', () => {
  it('should render a formatted date (dd LLL yyyy HH:mm:ss)', () => {
    const { container } = render(<Component label="From" date="2019-10-25T09:30Z" />);
    expect(container.innerHTML).toMatch('From: 25 Oct 2019 10:30:00');
  });
});
