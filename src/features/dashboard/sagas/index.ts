import { SagaIterator } from 'redux-saga';
import { takeLatest, call, put } from 'redux-saga/effects';
import {
  FETCH_CARBON_INTENSITY_REQUEST,
  fetchCarbonIntensitySuccess,
  fetchCarbonIntensityError,
} from '../actions';
import { fetchCarbonIntensity } from '../services';

export function* fetchCarbonIntensityRequest(): SagaIterator {
  try {
    const { data } = yield call(fetchCarbonIntensity);
    yield put(fetchCarbonIntensitySuccess({ data: data.data }));
  } catch (error) {
    yield put(fetchCarbonIntensityError({ error: true }));
  }
}

export function* watchDashboardRequests(): SagaIterator {
  yield takeLatest(FETCH_CARBON_INTENSITY_REQUEST, fetchCarbonIntensityRequest);
}
