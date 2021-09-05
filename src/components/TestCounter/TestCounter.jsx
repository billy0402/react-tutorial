import React, { useState } from 'react';

import style from './index.scss';

const TestCounter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div className={style.count}>目前數字: {count}</div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        點我加一
      </button>
    </div>
  );
};

export default TestCounter;
