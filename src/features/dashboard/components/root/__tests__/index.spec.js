import React from 'react';
import { shallow } from 'enzyme';
import { render } from '@testing-library/react';
import Component from '..';

describe('Dashboard component', () => {
  describe('mount', () => {
    it('should call the fetchCarbonIntensityRequest action', () => {
      const props = {
        actions: {
          fetchCarbonIntensityRequest: jest.fn(),
        },
      };
      render(<Component {...props} />);
      expect(props.actions.fetchCarbonIntensityRequest).toHaveBeenCalled();
    });
  });

  describe('render', () => {
    it('should render a loading message if loading prop value is truthy', () => {
      const props = {
        loading: true,
        actions: {
          fetchCarbonIntensityRequest: jest.fn(),
        },
      };
      const { getByText } = render(<Component {...props} />);
      expect(getByText(/loading/i)).toBeDefined();
    });

    it('should render an error message if error prop value is truthy', () => {
      const props = {
        error: true,
        actions: {
          fetchCarbonIntensityRequest: jest.fn(),
        },
      };
      const { getByText } = render(<Component {...props} />);
      expect(getByText(/something happened/i)).toBeDefined();
    });

    it('should render an error message if error prop value is truthy', () => {
      const props = {
        error: true,
        actions: {
          fetchCarbonIntensityRequest: jest.fn(),
        },
      };
      const { getByText } = render(<Component {...props} />);
      expect(getByText(/something happened/i)).toBeDefined();
    });

    it('should render a start date, end date and a list of fuels if data prop is defined', () => {
      const props = {
        data: {
          from: '2019-10-26T07:30Z',
          to: '2019-10-26T08:00Z',
          generationmix: [
            {
              fuel: 'carbon',
              perc: 1,
            },
          ],
        },
        actions: {
          fetchCarbonIntensityRequest: jest.fn(),
        },
      };
      const wrapper = shallow(<Component {...props} />);
      const dates = wrapper.find('GenerationDate');
      expect(dates.length).toEqual(2);
      expect(dates.at(0).props()).toMatchObject({
        date: props.data.from,
      });
      expect(dates.at(1).props()).toMatchObject({
        date: props.data.to,
      });
      const list = wrapper.find('FuelLevelList');
      expect(list.length).toEqual(1);
      expect(list.props()).toMatchObject({
        list: props.data.generationmix,
      });
    });
  });
});
