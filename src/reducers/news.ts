import { AddNews, DeleteNews, NewsActionTypes } from '../actions/news';

export interface News {
  id: number;
  name: string;
  description: string;
}

export interface NewsState {
  news: News[];
}

const initialState: NewsState = {
  news: [
    { id: 1, name: '第一筆最新消息', description: '這裡是第一筆哦！' },
    { id: 2, name: '第二筆最新消息', description: '這裡是第二筆哦！' },
    { id: 3, name: '第三筆最新消息', description: '這裡是第三筆哦！' },
  ],
};

const news = (state = initialState, action: NewsActionTypes): NewsState => {
  switch (action.type) {
    case 'ADD_NEWS':
      return {
        ...state,
        news: [...state.news, (<AddNews>action).payload.news],
      };
    case 'DELETE_NEWS':
      return {
        ...state,
        news: state.news.filter(
          (theNews) => theNews.id !== (<DeleteNews>action).payload.id,
        ),
      };
    default:
      return state;
  }
};

export default news;
