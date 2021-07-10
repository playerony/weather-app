import * as pages from '../pages';

import { Routes, RoutingConfig } from '.';

export const routingConfig: Record<Routes, RoutingConfig> = {
  [Routes.DASHBOARD]: {
    component: pages.DashboardPage,
  },
  [Routes.NOT_FOUND]: {
    component: pages.NotFoundPage,
  },
  [Routes.ANY]: {
    component: pages.NotFoundPage,
  },
};
