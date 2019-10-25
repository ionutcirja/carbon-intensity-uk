import { fork, all } from 'redux-saga/effects';
import { watchDashboardRequests } from '@features/dashboard/sagas';

export default function* () {
  yield all([
    fork(watchDashboardRequests),
  ]);
}
