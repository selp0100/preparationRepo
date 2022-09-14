import styled from 'styled-components';

export const ContentContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  background-color: ${({ theme: { style } }) => style.skyBlue};

  @keyframes slide {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(0%);
    }
  }
  animation: slide 1s;
`;

export const NavContent = styled.div``;
