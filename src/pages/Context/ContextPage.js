import React from 'react';
import * as S from './ContextPageStyle';
import ContextBox from './ContextBox/ContextBox';

const ContextPage = () => {
  return (
    <S.ContextBackground>
      <S.ContextContainer>
        <ContextBox />
      </S.ContextContainer>
    </S.ContextBackground>
  );
};

export default ContextPage;
