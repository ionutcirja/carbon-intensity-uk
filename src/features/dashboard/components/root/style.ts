/* eslint-disable no-confusing-arrow */
import styled from 'styled-components';

export const Section = styled.section`
  padding: 16px;
`;

type MessageProps = {
  isError?: boolean;
}

export const Message = styled.section<MessageProps>`
  font-size: 1.4rem;
  line-height: 2rem;
  color: ${(props) => props.isError ? props.theme.colors.red : props.theme.colors.darkBlue};
  text-align: center;
`;

export const DatesWrapper = styled.div`
  display: flex;
  margin-bottom: 40px;
  flex-direction: row;
  justify-content: center;
`;
