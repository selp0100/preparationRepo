import React, { useState } from 'react';
import NavContent from './NavContent/NavContent';
import * as S from './NavStyle';

const Nav = () => {
  const [isContent, setIsContent] = useState(false);

  return (
    <S.NavContainer>
      <S.NavBox>
        <S.NavLogo src="/image/Logo.png" alt="로고" />
        <S.NavMore
          src="/image/NavMore.png"
          alt="메뉴바펼치기"
          onClick={() => setIsContent(iscontent => !iscontent)}
        />
        {isContent && (
          <NavContent isContent={isContent} setIsContent={setIsContent} />
        )}
      </S.NavBox>
    </S.NavContainer>
  );
};

export default Nav;
