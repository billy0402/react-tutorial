import React, { useState } from 'react';

import style from './index.scss';

const Counter = () => {
  const [count, setCount] = useState(0);

  const [items, setItems] = useState([1, 2, 3]);

  const [name, setName] = useState({ firstName: '', lastName: '' });

  return (
    <div>
      <div>目前數字: {count}</div>
      <button
        onClick={() => {
          // setCount(count + 1);
          // setCount(count + 1);
          // setCount(count + 1);

          setCount((newCount, newProps) => newCount + 1);
          setCount((newCount, newProps) => newCount + 1);
          setCount((newCount, newProps) => newCount + 1);

          console.log(count);
        }}
      >
        點我加一
      </button>

      <div>目前陣列: {JSON.stringify(items)}</div>
      <button
        onClick={() => {
          setItems([...items, items[items.length - 1] + 1]);
        }}
      >
        點我加一
      </button>

      <div>目前物件: {name.firstName + name.lastName}</div>
      <button
        onClick={() => {
          setName({ ...name, firstName: 'Clark' });
        }}
      >
        點我加一
      </button>
    </div>
  );
};

export default Counter;
