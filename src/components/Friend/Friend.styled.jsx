import styled from '@emotion/styled';

const colorByStatus = props => {
  if (props.online) {
    return 'green';
  }
  return 'red';
};

export const IconActive = styled.span`
  border-radius: 50%;
  width: 30px;
  height: 30px;
  background-color: ${colorByStatus};
`;
