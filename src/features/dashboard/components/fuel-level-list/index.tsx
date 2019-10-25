import React from 'react';
import FuelLevel from '../fuel-level';

type Props = {
  list: Array<{
    fuel: string;
    perc: number;
  }>;
}

const FuelLevelList = ({ list }: Props) => (
  <ul>
    {list.map((item) => (
      <FuelLevel key={item.fuel} name={item.fuel} percentage={item.perc} />
    ))}
  </ul>
);

export default FuelLevelList;
