import styled from 'styled-components';

export const EmptyQuestionsWrapper = styled.div`
  max-width: 350px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  margin: 10% auto;

  span {
    font-size: 18px;
    font-weight: 600;
  }

  p {
    font-size: 16px;
    color: #737380;
    text-align: center;
  }
`;
