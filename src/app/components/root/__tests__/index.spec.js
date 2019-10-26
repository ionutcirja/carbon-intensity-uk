import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';
import Component from '..';

describe('App component', () => {
  const MainRouteComponent = () => (<div>Main route</div>);
  const SecondaryRouteComponent = () => (<div>Secondary route</div>);

  const routes = [
    {
      path: '/',
      exact: true,
      component: MainRouteComponent,
    },
    {
      path: '/secondary-route',
      component: SecondaryRouteComponent,
    },
  ];

  describe('render', () => {
    it('should render the right component when navigating to a route', () => {
      const history = createMemoryHistory();
      let wrapper = render(
        <Router history={history}>
          <Component routes={routes} />
        </Router>,
      );
      expect(wrapper.container.innerHTML).toMatch('Main route');

      history.push('/secondary-route');
      wrapper = render(
        <Router history={history}>
          <Component routes={routes} />
        </Router>,
      );
      expect(wrapper.container.innerHTML).toMatch('Secondary route');
    });
  });
});
