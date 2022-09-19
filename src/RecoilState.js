import axios from 'axios';
import { atom, selector } from 'recoil';

export const recoilTest = atom({
  key: 'testValue',
  default: '테스트',
});

export const recoilUser = selector({
  key: 'recoilUser',
  get: async () => {
    try {
      const res = await axios.get('/data/userData.json');
      const user = res.data;
      return user;
    } catch (error) {
      throw error;
    }
  },
});
