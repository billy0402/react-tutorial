import React, { useCallback, useEffect, useMemo, useState } from 'react';

import style from './index.scss';

const Title = React.memo(
  () => {
    console.log('Render title component');
    return (
      <div>
        <h1>計數器</h1>
      </div>
    );
  },
  (prevProps, nextProps) => {
    console.log(prevProps, nextProps);
    return false;
  },
);

const IncreaseCounter = (props) => {
  console.log('Button 被重新渲染');
  return <button onClick={props.increase}>點我加一</button>;
};

const Counter = () => {
  const [count, setCount] = useState(0);

  const [items, setItems] = useState([1, 2, 3]);

  const [name, setName] = useState({ firstName: '', lastName: '' });

  const [userName, setUserName] = useState('');

  const decorateName = useMemo(() => {
    console.log('decorate name');
    return `超級${userName}!`;
  }, [userName]);

  const increase = useCallback(() => {
    setCount((newCount) => newCount + 1);
  }, []);

  useEffect(() => {
    console.log('Counter 第一次渲染後和因為 state 改變重新渲染後');
    console.log(`Counter 的新值為 ${count}`);

    return () => {
      console.log(`Counter 的舊值為 ${count}`);
      console.log('Counter 被移除了');
    };
  }, [count]);

  return (
    <div>
      <Title />
      <div>使用者: {decorateName}</div>
      <input value={userName} onChange={(e) => setUserName(e.target.value)} />

      <div>目前數字: {count}</div>
      <IncreaseCounter increase={increase} />

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
