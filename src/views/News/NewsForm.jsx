import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { addNews } from '../../actions/news';

const NewsForm = () => {
  const [newsForm, setNewsForm] = useState({ name: '', description: '' });
  const dispatch = useDispatch();

  return (
    <div>
      名稱:
      <input
        placeholder='請輸入名稱'
        value={newsForm.name}
        onChange={(e) => {
          setNewsForm({ ...newsForm, name: e.target.value });
        }}
      />
      敘述:
      <input
        placeholder='請輸入敘述'
        value={newsForm.description}
        onChange={(e) => {
          setNewsForm({ ...newsForm, description: e.target.value });
        }}
      />
      <button
        onClick={() => {
          dispatch(addNews({ ...newsForm, id: Math.random() }));
        }}
      >
        新增最新消息
      </button>
    </div>
  );
};

export default NewsForm;
