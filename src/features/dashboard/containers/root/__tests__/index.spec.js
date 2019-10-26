import React from 'react';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import Container from '..';

describe('Dashboard container', () => {
  const createMockStore = configureMockStore();
  const state = {
    carbonIntensity: {
      from: '2019-10-26T07:30Z',
      to: '2019-10-26T08:00Z',
      generationmix: [
        {
          fuel: 'solar',
          perc: 1,
        },
      ],
    },
  };
  const store = createMockStore(state);

  describe('mapStateToProps', () => {
    it('should pass state carbon intensity props', () => {
      const component = shallow(<Container store={store} />).shallow();
      expect(component.props()).toMatchObject({
        ...state.carbonIntensity,
      });
    });
  });

  describe('mapDispatchToProps', () => {
    it('should bind the necessary actions to props', () => {
      const component = shallow(<Container store={store} />).shallow();
      expect(component.props().actions.fetchCarbonIntensityRequest).toBeDefined();
    });
  });
});
