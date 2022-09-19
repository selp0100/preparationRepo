import styled from 'styled-components';

export const ContextBox = styled.div`
  ${({ theme: { variables } }) => variables.flex('column')}
  width: 300px;
  height: 300px;
  background-color: ${({ theme: { style } }) => style.white};
`;

export const UserInfo = styled.div`
  margin: 10px 0;
  font-size: 12px;
`;
