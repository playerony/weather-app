import { ComponentType } from 'react';
import { RouteComponentProps } from 'react-router-dom';

export interface RoutingConfig {
  exact?: boolean;
  component: ComponentType<RouteComponentProps<any>> | ComponentType<any>;
}

export enum Routes {
  DASHBOARD = '/',
  NOT_FOUND = '/404',
  ANY = '*',
}
