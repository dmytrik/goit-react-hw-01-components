import styled from '@emotion/styled';

export const StatBox = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-basis: calc(100% / 4);
  height: 110px;
  background-color: ${() => {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }};
`;
