import React, { useEffect } from 'react';
import GenerationDate from '../date';
import FuelLevelList from '../fuel-level-list';
import { Section } from './style';

type Props = CarbonIntensity & {
  actions: {
    fetchCarbonIntensityRequest: () => void;
  };
};

const Dashboard = ({
  loading,
  error,
  data,
  actions,
}: Props) => {
  useEffect(() => {
    actions.fetchCarbonIntensityRequest();
  }, []);

  return (
    <Section>
      {loading && <span>Loading data...</span>}
      {error && <span>Something happened on out end. Please try again later.</span>}
      {data && ([
        <GenerationDate key="startDate" label="From" date={data.from} />,
        <GenerationDate key="endDate" label="To" date={data.to} />,
        <FuelLevelList key="list" list={data.generationmix} />,
      ])}
    </Section>
  );
};

export default Dashboard;
