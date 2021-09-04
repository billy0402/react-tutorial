import React, { useState } from 'react';

import Counter from '../../components/Counter';

import style from './index.scss';

const Home = () => {
  const [displayCounter, setDisplayCount] = useState(true);

  return (
    <>
      <h1>這是首頁</h1>
      <button
        onClick={() => {
          setDisplayCount(true);
        }}
      >
        打開計數器
      </button>
      <button
        onClick={() => {
          setDisplayCount(false);
        }}
      >
        關閉計數器
      </button>
      {displayCounter ? <Counter /> : null}
    </>
  );
};

export default Home;
