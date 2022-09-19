import React from 'react';
import ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import theme from './styles/theme';
import variables from './styles/variables';
import Router from './Router';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={{ style: theme, variables }}>
    <GlobalStyle />
    <React.Suspense fallback={<div>Loading...</div>}>
      <RecoilRoot>
        <Router />
      </RecoilRoot>
    </React.Suspense>
  </ThemeProvider>
);
