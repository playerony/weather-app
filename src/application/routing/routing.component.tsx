import { Children } from 'react';
import { Route, Switch } from 'react-router-dom';
import { AppRouteConfig, Routes } from './routing.config';

export const Routing = (): JSX.Element => (
  <Switch>
    {Children.toArray(
      Object.keys(AppRouteConfig).map((path) => {
        const currentRoute = AppRouteConfig[path as Routes];

        return <Route {...currentRoute} path={path} exact={currentRoute.exact ?? true} />;
      }),
    )}
  </Switch>
);
