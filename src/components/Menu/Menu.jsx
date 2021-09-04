import React from 'react';
import { Link } from 'react-router-dom';

import style from './index.scss';

const Menu = () => (
  <ul>
    <li>
      <Link to='/home'>首頁</Link>
    </li>
    <li>
      <Link to='/about'>關於我們</Link>
    </li>
  </ul>
);

export default Menu;
