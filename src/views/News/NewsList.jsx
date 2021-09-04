import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const NewsList = (props) => (
  <ul>
    {props.news.map((theNews) => (
      <li key={theNews.id}>
        <Link to={`/news/${theNews.id}`}>{theNews.name}</Link>
      </li>
    ))}
  </ul>
);

const mapStateToProps = (state) => ({
  news: state.news.news,
  user: state.user.name,
});

export default connect(mapStateToProps)(NewsList);
