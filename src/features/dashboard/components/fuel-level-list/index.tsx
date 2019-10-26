import React from 'react';
import FuelLevel from '../fuel-level';
import { List } from './style';

type Props = {
  list: Array<{
    fuel: string;
    perc: number;
  }>;
}

const FuelLevelList = ({ list }: Props) => (
  <List>
    {list.map((item) => (
      <FuelLevel key={item.fuel} name={item.fuel} percentage={item.perc} />
    ))}
  </List>
);

export default FuelLevelList;
