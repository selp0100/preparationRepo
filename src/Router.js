import React, { createContext, useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import axios from 'axios';

export const userData = createContext();

const Router = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await axios.get('/data/userData.json');
        return setUser(res.data);
      } catch (error) {
        throw error;
      }
    };
    getUser();
  }, []);

  return (
    <BrowserRouter>
      <userData.Provider value={user}>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </userData.Provider>
    </BrowserRouter>
  );
};

export default Router;
