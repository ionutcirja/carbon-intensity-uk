import React, { useEffect } from 'react';
import GenerationDate from '../date';
import FuelLevelList from '../fuel-level-list';
import { Section, Message, DatesWrapper } from './style';

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
      {loading && <Message>Loading data...</Message>}
      {error && <Message isError>Something happened on our end. Please try again later.</Message>}
      {data && ([
        <DatesWrapper key="dates">
          <GenerationDate label="From" date={data.from} />
          <GenerationDate label="To" date={data.to} />
        </DatesWrapper>,
        <FuelLevelList key="list" list={data.generationmix} />,
      ])}
    </Section>
  );
};

export default Dashboard;
