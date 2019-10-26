import Dashboard from '@features/dashboard/containers/root';

export const DASHBOARD_PATH = '/';

export default [
  {
    path: DASHBOARD_PATH,
    exact: true,
    component: Dashboard,
  },
  {
    path: '*',
    component: Dashboard,
  },
];
