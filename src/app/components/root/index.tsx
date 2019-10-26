import React, { ComponentType } from 'react';
import { Switch, Route } from 'react-router';

type RouteProps = {
  exact?: boolean;
  path: string;
  component: ComponentType<any>;
}

type Props = {
  routes: RouteProps[];
}

const App = ({ routes }: Props) => (
  <Switch>
    {routes.map((route: RouteProps) => (
      <Route
        key={`path-${route.path}`}
        exact={route.exact}
        path={route.path}
        component={route.component}
      />
    ))}
  </Switch>
);

export default App;
