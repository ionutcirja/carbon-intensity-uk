import axios from 'axios';

const FETCH_CARBON_INTENSITY_URL = '/generation';

export const fetchCarbonIntensity = (): Promise<any> => (
  axios.get(FETCH_CARBON_INTENSITY_URL)
);
