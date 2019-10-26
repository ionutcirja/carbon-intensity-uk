/* eslint-disable no-param-reassign */
import { AnyAction } from 'redux';
import { handleActions } from 'redux-actions';
import produce, { Draft } from 'immer';
import {
  fetchCarbonIntensityRequest,
  fetchCarbonIntensitySuccess,
  fetchCarbonIntensityError,
} from '../actions';

export default handleActions({
  [fetchCarbonIntensityRequest]: produce((state: Draft<CarbonIntensity>) => {
    state.loading = true;
  }),
  [fetchCarbonIntensitySuccess]: produce((state: Draft<CarbonIntensity>, action: AnyAction) => {
    state.loading = false;
    state.data = action.payload.data;
  }),
  [fetchCarbonIntensityError]: produce((state: Draft<CarbonIntensity>) => {
    state.loading = false;
    state.error = true;
  }),
}, {});
