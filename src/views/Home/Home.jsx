import React, { useState } from 'react';

import Counter from '../../components/Counter';

const Home = () => {
  const [displayCounter, setDisplayCount] = useState(true);

  return (
    <>
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
