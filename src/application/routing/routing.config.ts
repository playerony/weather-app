import { ComponentType } from 'react';
import { RouteComponentProps } from 'react-router-dom';

import * as Pages from '../pages';

export interface RoutingConfig {
  exact?: boolean;
  component: ComponentType<RouteComponentProps<any>> | ComponentType<any>;
}

export enum Routes {
  DASHBOARD = '/',
  NOT_FOUND = '/404',
  ANY = '*',
}

export const routingConfig: Record<Routes, RoutingConfig> = {
  [Routes.DASHBOARD]: {
    component: Pages.DashboardPage,
  },
  [Routes.NOT_FOUND]: {
    component: Pages.NotFoundPage,
  },
  [Routes.ANY]: {
    component: Pages.NotFoundPage,
  },
};
