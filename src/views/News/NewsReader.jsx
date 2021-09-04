import React from 'react';

import UpdateBtn from '../../components/UpdateBtn';

const NewsReader = (props) => {
  console.log(props.match);
  const targetNewsId = props.match.params.id;
  const targetNews = props.news.find(
    (theNews) => String(theNews.id) === String(targetNewsId),
  );

  return (
    <div>
      <h1>您正在閱讀{targetNews.name}</h1>
      <p>{targetNews.description}</p>
      <UpdateBtn />
    </div>
  );
};

export default NewsReader;
