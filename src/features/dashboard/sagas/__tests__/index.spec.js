import { call, takeLatest, put } from 'redux-saga/effects';
import {
  fetchCarbonIntensity,
} from '../../services';
import {
  watchDashboardRequests,
  fetchCarbonIntensityRequest,
} from '..';

describe('Dashboard sagas', () => {
  describe('watchDashboardRequests', () => {
    it('should wait for a FETCH_CARBON_INTENSITY_REQUEST action', () => {
      const generator = watchDashboardRequests();
      expect(generator.next().value).toEqual(
        takeLatest('FETCH_CARBON_INTENSITY_REQUEST', fetchCarbonIntensityRequest),
      );
      expect(generator.next().done).toEqual(true);
    });
  });

  describe('fetchCarbonIntensityRequest', () => {
    it('should call fetchCarbonIntensity services method and'
      + ' dispatch a FETCH_CARBON_INTENSITY_SUCCESS action in case of success', () => {
      const data = {
        from: '24/10/2019',
        to: '25/10/2019',
      };
      const generator = fetchCarbonIntensityRequest();
      expect(generator.next().value).toEqual(call(fetchCarbonIntensity));
      expect(generator.next({ data: { data } }).value).toEqual(
        put({
          type: 'FETCH_CARBON_INTENSITY_SUCCESS',
          payload: { data },
        }),
      );
      expect(generator.next().done).toEqual(true);
    });

    it('should call fetchCarbonIntensity services method and'
      + ' dispatch a FETCH_CARBON_INTENSITY_ERROR action in case of error', () => {
      const error = { message: 'error' };
      const generator = fetchCarbonIntensityRequest();
      expect(generator.next().value).toEqual(call(fetchCarbonIntensity));
      expect(generator.throw(error).value).toEqual(
        put({
          type: 'FETCH_CARBON_INTENSITY_ERROR',
          payload: {
            error: true,
          },
        }),
      );
      expect(generator.next().done).toEqual(true);
    });
  });
});
