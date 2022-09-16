import React, { useState } from 'react';
import Nav from '../../components/Nav/Nav';
import ContextPage from '../Context/ContextPage';
import FirstPage from '../FirstPage/FirstPage';

const Main = () => {
  const [tab, setTab] = useState('FirstPage');

  const onChangeTab = pagePath => {
    setTab(pagePath);
  };

  const getSelectTab = () => {
    let tabPage;
    switch (tab) {
      case 'FirstPage':
        tabPage = <FirstPage />;
        break;

      case 'ContextPage':
        tabPage = <ContextPage />;
        break;

      default:
        alert('아직 추가 안했습니다.');
        break;
    }
    return tabPage;
  };

  return (
    <>
      <Nav onChangeTab={onChangeTab} />
      {getSelectTab()}
    </>
  );
};

export default Main;
