import React from 'react';
import { format, parseISO } from 'date-fns';
import { Date } from './style';

type Props = {
  label: string;
  date: string;
}

const GenerationDate = ({ label, date }: Props) => (
  <Date>{`${label}: ${format(parseISO(date), 'dd LLL yyyy HH:mm:ss')}`}</Date>
);

export default GenerationDate;
