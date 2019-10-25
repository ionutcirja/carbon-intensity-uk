import React from 'react';

type Props = {
  name: string;
  percentage: number;
}

const FuelLevel = ({ name, percentage }: Props) => (
  <li>
    <p>{name}</p>
    <p>{percentage}</p>
    <span style={{ height: `${percentage / 100}%` }} />
  </li>
);

export default FuelLevel;
