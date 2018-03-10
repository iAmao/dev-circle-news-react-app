import { ADD_NEWS, DELETE_NEWS } from './constants';

export const addNews = (news) => {
  return { type: ADD_NEWS, payload: news };
};

export const deleteNews = (news) => {
  return { type: DELETE_NEWS, payload: news };
};
