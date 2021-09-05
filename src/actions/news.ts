import { News } from '../reducers/news';

interface AddNewsPayload {
  news: News;
}

export interface AddNews {
  type: string;
  payload: AddNewsPayload;
}

interface DeleteNewsPayload {
  id: number;
}

export interface DeleteNews {
  type: string;
  payload: DeleteNewsPayload;
}

export const addNews = (news: News): AddNews => {
  // let news = {};
  // setTimeout(() => {
  //   news = theNews;
  // }, 1000);
  return { type: 'ADD_NEWS', payload: { news } };
};

export const deleteNews = (id: number): DeleteNews => ({
  type: 'DELETE_NEWS',
  payload: { id },
});

export type NewsActionTypes = AddNews | DeleteNews;
