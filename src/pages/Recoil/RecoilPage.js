import React from 'react';
import { useRecoilState, useResetRecoilState } from 'recoil';
import { recoilTest, recoilUser } from '../../RecoilState';
import * as S from './RecoilPageStyle';

const RecoilPage = () => {
  const [testValue, setTestValue] = useRecoilState(recoilTest);
  const [user] = useRecoilState(recoilUser);

  const onChangeUser = e => {
    setTestValue(e.target.value);
  };

  const userReset = useResetRecoilState(recoilTest);

  const userRestBtnActive = () => {
    userReset();
  };

  return (
    <S.RecoilPageBackGround>
      <S.RecoilPageBox>
        <S.UserInfo>test: {testValue}</S.UserInfo>
        <S.UserInfo>이름 : {user.name}</S.UserInfo>
        <S.UserInfo>나이 : {user.age}</S.UserInfo>
        <S.UserInfo>이메일 : {user.Email}</S.UserInfo>
        <S.UserInfo>핸드폰 : {user.phone}</S.UserInfo>
        <input onChange={onChangeUser} />
        <button onClick={userRestBtnActive}>textValue 원래 state로 복구</button>
      </S.RecoilPageBox>
    </S.RecoilPageBackGround>
  );
};

export default RecoilPage;
