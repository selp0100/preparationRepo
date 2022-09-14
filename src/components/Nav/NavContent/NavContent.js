import React, { useEffect, useState, useRef } from 'react';
import * as S from './NavContantStyle';
import axios from 'axios';

const NavContent = ({ isContent, setIsContent }) => {
  const [navContent, setNavContent] = useState([]);

  const contentRef = useRef();

  const onClickOutside = e => {
    if (isContent && !contentRef.current.contains(e.target)) {
      setIsContent(iscontent => !iscontent);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', onClickOutside);
    return () => {
      document.removeEventListener('mousedown', onClickOutside);
    };
  });

  useEffect(() => {
    axios.get('/data/navData.json').then(res => setNavContent(res.data));
  }, []);

  return (
    <S.ContentContainer ref={el => (contentRef.current = el)}>
      {navContent.map(contents => (
        <S.NavContent key={contents.id}>{contents.content}</S.NavContent>
      ))}
    </S.ContentContainer>
  );
};

export default NavContent;