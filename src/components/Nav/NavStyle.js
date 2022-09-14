import styled from 'styled-components';

export const NavContainer = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  background-color: ${({ theme: { style } }) => style.baseColor};
  z-index: 888;
`;

export const NavBox = styled.div`
  ${({ theme: { variables } }) => variables.flex('', 'space-between')}
`;

export const NavMore = styled.img`
  width: 50px;
  height: 50px;
  cursor: pointer;
`;

export const NavLogo = styled(NavMore)`
  height: 45px;
`;
