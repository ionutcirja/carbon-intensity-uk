/* eslint-disable no-confusing-arrow */
import styled from 'styled-components';

export const ListItem = styled.li`
  position: relative;
  padding: 20px;
  background-color: ${(props) => props.theme.colors.blue};
  margin: 20px;
  width: 100%;
  height: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  @media (min-width: ${(props) => props.theme.breakpoints.small}) {
    width: 350px;
  }
`;

export const ListItemName = styled.p`
  font-size: 1.2rem;
  line-height: 2rem;
  color: ${(props) => props.theme.colors.darkBlue};
  text-transform: uppercase;
  font-weight: bold;
`;

type ListItemPercentageProps = {
  isHighValue: boolean;
};

export const ListItemPercentage = styled.p<ListItemPercentageProps>`
  font-size: 6rem;
  line-height: 6.4rem;
  color: ${(props) => props.isHighValue ? props.theme.colors.red : props.theme.colors.white};
`;
