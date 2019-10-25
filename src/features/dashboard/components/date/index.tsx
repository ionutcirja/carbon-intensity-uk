import React from 'react';
import { format, parseISO } from 'date-fns';

type Props = {
  label: string;
  date: string;
}

const GenerationDate = ({ label, date }: Props) => (
  <p>{`${label}: ${format(parseISO(date), 'dd LLL yyyy HH:mm:ss')}`}</p>
);

export default GenerationDate;
