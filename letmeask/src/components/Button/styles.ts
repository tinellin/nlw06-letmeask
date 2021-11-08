import styled from 'styled-components';

type SButtonProps = {
  color?: string;
  bgColor?: string
}

export const SButton = styled.button<SButtonProps>`
  height: 50px;
  border-radius: 8px;
  font-weight: 500;
  background: ${props => props.bgColor || "#835afd"};
  color: ${props => props.color || "#fff"};
  padding: 0 32px;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  border: none;

  transition: filter 0.2s;

  &.outlined {
    background: #fff;
    border: 1px solid #835afd;
    color: #835afd;
  }

  img {
    margin-right: 8px;
  }

  &:not(:disabled):hover {
    filter: brightness(0.9);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
