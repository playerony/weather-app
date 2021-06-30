import { ComponentType } from 'react';
import { RouteComponentProps } from 'react-router-dom';

import * as Pages from '../pages';

export interface RouteConfig {
  component: ComponentType<RouteComponentProps<any>> | ComponentType<any>;
  exact?: boolean;
}

export enum Routes {
  DASHBOARD = '/',
  NOT_FOUND = '/404',
  ANY = '*',
}

export const AppRouteConfig: Record<Routes, RouteConfig> = {
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
