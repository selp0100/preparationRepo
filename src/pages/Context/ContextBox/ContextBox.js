import React, { useContext } from 'react';
import * as S from './ContextBoxStyle';
import { userData } from '../../../Router';

const ContextBox = () => {
  const user = useContext(userData);
  return (
    <S.ContextBox>
      <S.UserInfo>이름 : {user.name}</S.UserInfo>
      <S.UserInfo>나이 : {user.age}</S.UserInfo>
      <S.UserInfo>이메일 : {user.Email}</S.UserInfo>
      <S.UserInfo>핸드폰 : {user.phone}</S.UserInfo>
    </S.ContextBox>
  );
};

export default ContextBox;
