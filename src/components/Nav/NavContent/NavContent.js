import React, { useEffect, useState, useRef } from 'react';
import * as S from './NavContantStyle';
import Button from '../../Button/Button';
import axios from 'axios';

const NavContent = ({ isContent, setIsContent, onChangeTab }) => {
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
    <S.ContentContainer
      ref={el => (contentRef.current = el)}
      isContent={isContent}
    >
      {isContent && (
        <Button
          width="50px"
          size="small"
          onClick={() => setIsContent(iscontent => !iscontent)}
        >
          x
        </Button>
      )}
      {navContent.map(contents => (
        <S.NavContent
          key={contents.id}
          onClick={() => {
            onChangeTab(contents.Link);
            setIsContent(isContent => !isContent);
          }}
        >
          {contents.content}
        </S.NavContent>
      ))}
    </S.ContentContainer>
  );
};

export default NavContent;
