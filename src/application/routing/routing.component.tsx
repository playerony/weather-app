import { Children } from 'react';
import { Route, Switch } from 'react-router-dom';

import { Routes, routingConfig } from '.';

export const Routing = (): JSX.Element => (
  <Switch>
    {Children.toArray(
      Object.keys(routingConfig).map((path) => {
        const currentRoute = routingConfig[path as Routes];

        return <Route {...currentRoute} path={path} exact={currentRoute.exact ?? true} />;
      }),
    )}
  </Switch>
);
