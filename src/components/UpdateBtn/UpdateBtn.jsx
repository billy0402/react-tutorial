import React from 'react';
import { useHistory, withRouter } from 'react-router';

import style from './index.scss';

// const UpdateBtn = withRouter(({ history }) => (
//   <button
//     onClick={() => {
//       history.push('/home');
//     }}
//   >
//     儲存並回到首頁
//   </button>
// ));

const UpdateBtn = () => {
  const history = useHistory();

  const update = () => {
    // do something...
    history.push('/home');
  };

  return <button onClick={update}>儲存並回到首頁</button>;
};

export default UpdateBtn;
