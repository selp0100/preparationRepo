import styled from 'styled-components';

export const ContextBackground = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: ${({ theme: { style } }) => style.backColor};
`;

export const ContextContainer = styled.div`
  ${({ theme: { variables } }) => variables.absoluteCenter}
`;
