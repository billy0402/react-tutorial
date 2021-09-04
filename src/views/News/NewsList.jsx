import React from 'react';
import { Link } from 'react-router-dom';

const NewsList = (props) => (
  <ul>
    {props.news.map((theNews) => (
      <li key={theNews.id}>
        <Link to={`/news/${theNews.id}`}>{theNews.name}</Link>
      </li>
    ))}
  </ul>
);

export default NewsList;
