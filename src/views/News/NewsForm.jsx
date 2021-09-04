import React, { useState } from 'react';
import { connect } from 'react-redux';

import { addNews } from '../../actions/news';

const NewsForm = (props) => {
  const [newsForm, setNewsForm] = useState({ name: '', description: '' });

  return (
    <div>
      名稱:
      <input
        value={newsForm.name}
        onChange={(e) => {
          setNewsForm({ ...newsForm, name: e.target.value });
        }}
      />
      敘述:
      <input
        value={newsForm.description}
        onChange={(e) => {
          setNewsForm({ ...newsForm, description: e.target.value });
        }}
      />
      <button
        onClick={() => {
          props.addNews({ ...newsForm, id: Math.random() });
        }}
      >
        新增最新消息
      </button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addNews: (news) => {
    dispatch(addNews(news));
  },
});

export default connect(null, mapDispatchToProps)(NewsForm);
