import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import style from './index.scss';

// const Menu = () => {
//   const history = useHistory();
//   const changeRouter = (router) => {
//     history.push(router);
//   };
//   return (
//     <ul>
//       <li onClick={() => changeRouter('/home')}>首頁</li>
//       <button onClick={() => changeRouter('/news')}>新聞</button>
//       <a onClick={() => changeRouter('/about')}>關於我們</a>
//     </ul>
//   );
// };

const Menu = () => (
  <ul>
    <li>
      <Link to='/home'>首頁</Link>
    </li>
    <li>
      <Link to='/news'>新聞</Link>
    </li>
    <li>
      <Link to='/about'>關於我們</Link>
    </li>
  </ul>
);

export default Menu;
