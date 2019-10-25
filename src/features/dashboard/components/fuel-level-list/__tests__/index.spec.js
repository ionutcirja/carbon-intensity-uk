import React from 'react';
import { shallow } from 'enzyme';
import Component from '..';

describe('FuelLevelList component', () => {
  const props = {
    list: [
      {
        fuel: 'coal',
        perc: 2,
      },
      {
        fuel: 'solar',
        perc: 5,
      },
    ],
  };

  it('should render a list of fuels', () => {
    const wrapper = shallow(<Component {...props} />);
    const fuelLevelsList = wrapper.find('FuelLevel');
    expect(fuelLevelsList.length).toEqual(props.list.length);
    for (let i = 0; i < fuelLevelsList.length; i += 1) {
      const fuelLevel = fuelLevelsList.at(i);
      expect(fuelLevel.props()).toMatchObject({
        name: props.list[i].fuel,
        percentage: props.list[i].perc,
      });
    }
  });
});
