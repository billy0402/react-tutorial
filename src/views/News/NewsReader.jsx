import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import UpdateBtn from '../../components/UpdateBtn';

const NewsReader = () => {
  const { id: targetNewsId } = useParams();
  const news = useSelector((state) => state.news.news);
  const userName = useSelector((state) => state.user.name);
  const targetNews = news.find(
    (theNews) => String(theNews.id) === String(targetNewsId),
  );

  return (
    <div>
      <h1>您正在閱讀{targetNews.name}</h1>
      <span>{userName}</span>
      <p>{targetNews.description}</p>
      <UpdateBtn />
    </div>
  );
};

export default NewsReader;
