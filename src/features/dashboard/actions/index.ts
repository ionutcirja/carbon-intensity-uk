import { createAction } from 'redux-actions';

export const FETCH_CARBON_INTENSITY_REQUEST = 'FETCH_CARBON_INTENSITY_REQUEST';
export const FETCH_CARBON_INTENSITY_SUCCESS = 'FETCH_CARBON_INTENSITY_SUCCESS';
export const FETCH_CARBON_INTENSITY_ERROR = 'FETCH_CARBON_INTENSITY_ERROR';

export const fetchCarbonIntensityRequest: any = createAction(FETCH_CARBON_INTENSITY_REQUEST);
export const fetchCarbonIntensitySuccess: any = createAction(FETCH_CARBON_INTENSITY_SUCCESS);
export const fetchCarbonIntensityError: any = createAction(FETCH_CARBON_INTENSITY_ERROR);
