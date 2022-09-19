import styled from 'styled-components';

export const RecoilPageBackGround = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: ${({ theme: { style } }) => style.backColor};
`;

export const RecoilPageBox = styled.div`
  ${({ theme: { variables } }) => variables.flex('column')}
  ${({ theme: { variables } }) => variables.absoluteCenter}
  width: 400px;
  height: 400px;
  background-color: ${({ theme: { style } }) => style.white};
`;

export const UserInfo = styled.div`
  margin: 10px 0;
  font-size: 12px;
`;
