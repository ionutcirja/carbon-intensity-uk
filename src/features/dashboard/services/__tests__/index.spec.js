import axios from 'axios';
import { fetchCarbonIntensity } from '..';

jest.mock('axios');

describe('Dashboard services', () => {
  describe('fetchCarbonIntensity', () => {
    it('should do a get request to the /generation endpoint', () => {
      fetchCarbonIntensity();
      expect(axios.get).toHaveBeenCalledWith('/generation');
    });
  });
});
