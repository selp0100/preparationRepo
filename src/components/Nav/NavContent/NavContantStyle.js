import styled, { keyframes } from 'styled-components';

const MoveSlide = keyframes`
  0%{
    transform: translateX(100%);
  }
  100%{
    transform: translateX(0%);
  }
`;

export const ContentContainer = styled.div`
  position: fixed;
  ${({ theme: { variables } }) => variables.flex('column', null)}
  top: 0;
  right: 0;
  height: 100%;
  background-color: ${({ theme: { style } }) => style.skyBlue};
  animation: ${MoveSlide} 0.5s linear;
`;

export const NavContent = styled.div`
  width: 100%;
  margin: 10px 0;
  text-align: center;
  font-size: 12px;
  font-weight: bold;
  cursor: pointer;
`;
