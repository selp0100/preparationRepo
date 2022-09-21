import React, { useState, useRef } from 'react';
import { useRecoilState, useResetRecoilState } from 'recoil';
import { recoilTest, recoilUser } from '../../RecoilState';
import Button from '../../components/Button/Button';
import * as S from './RecoilPageStyle';

const RecoilPage = () => {
  const [testValue, setTestValue] = useRecoilState(recoilTest);
  const [tesValueInput, setTestValueInput] = useState('Test Value Input');
  const [user] = useRecoilState(recoilUser);

  const inputRef = useRef(null);

  const onChangeValue = e => {
    setTestValueInput(e.target.value);
    setTestValue(e.target.value);
  };

  const userReset = useResetRecoilState(recoilTest);

  const userRestBtnActive = () => {
    userReset();
    inputRef.current.value = '';
    setTestValueInput('Test Value Input');
  };

  return (
    <S.RecoilPageBackGround>
      <S.RecoilPageBox>
        <S.UserInfo>test: {testValue}</S.UserInfo>
        <S.UserInfo>test: {tesValueInput}</S.UserInfo>
        <S.UserInfo>이름 : {user.name}</S.UserInfo>
        <S.UserInfo>나이 : {user.age}</S.UserInfo>
        <S.UserInfo>이메일 : {user.Email}</S.UserInfo>
        <S.UserInfo>핸드폰 : {user.phone}</S.UserInfo>

        <input onChange={onChangeValue} ref={inputRef} />
        <Button margin="20px" onClick={userRestBtnActive}>
          textValue 원래 state로 복구
        </Button>
      </S.RecoilPageBox>
    </S.RecoilPageBackGround>
  );
};

export default RecoilPage;
