import React from 'react';
import {
  ListItem,
  ListItemName,
  ListItemPercentage,
} from './style';

type Props = {
  name: string;
  percentage: number;
}

const FuelLevel = ({ name, percentage }: Props) => (
  <ListItem>
    <ListItemName>{name}</ListItemName>
    <ListItemPercentage isHighValue={percentage > 20}>{`${percentage}%`}</ListItemPercentage>
  </ListItem>
);

export default FuelLevel;
