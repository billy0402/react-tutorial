import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Counter from '../../components/Counter';
import { RootState } from '../../store';
import { fetchUser } from '../../actions/user';

import style from './index.scss';

const Home = () => {
  const [displayCounter, setDisplayCount] = useState(true);
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user.user);

  useEffect(() => {
    dispatch(fetchUser());
  }, []);

  return (
    <>
      <h1>這是首頁</h1>
      <div>{JSON.stringify(user)}</div>
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
