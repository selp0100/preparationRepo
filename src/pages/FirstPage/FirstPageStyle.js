import styled from 'styled-components';

export const FirstPageBackground = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: ${({ theme: { style } }) => style.backColor};
`;
