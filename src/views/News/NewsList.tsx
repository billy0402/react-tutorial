import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../../store';
import { deleteNews } from '../../actions/news';

const NewsList = () => {
  const news = useSelector((state: RootState) => state.news.news);
  const dispatch = useDispatch();

  return (
    <ul>
      {news.map((theNews) => (
        <li key={theNews.id}>
          <Link to={`/news/${theNews.id}`}>{theNews.name}</Link>
          <button
            onClick={() => {
              dispatch(deleteNews(theNews.id));
            }}
          >
            刪除
          </button>
        </li>
      ))}
    </ul>
  );
};

export default NewsList;
