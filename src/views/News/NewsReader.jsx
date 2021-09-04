import React from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';

import UpdateBtn from '../../components/UpdateBtn';

const NewsReader = (props) => {
  const { id: targetNewsId } = useParams();
  const targetNews = props.news.find(
    (theNews) => String(theNews.id) === String(targetNewsId),
  );

  return (
    <div>
      <h1>您正在閱讀{targetNews.name}</h1>
      <span>{props.user}</span>
      <p>{targetNews.description}</p>
      <UpdateBtn />
    </div>
  );
};

const mapStateToProps = (state) => ({
  news: state.news.news,
  user: state.user.name,
});

export default connect(mapStateToProps)(NewsReader);
