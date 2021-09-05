import React from 'react';

import style from './index.scss';

// const HelloWorld = () =>
//   React.createElement('div', { class: 'helloWorld' }, 'HelloWorld');

const HelloWorld = () => (
  // <div style={{ fontSize: 32, color: '#ffffff', backgroundColor: '#000000' }}>
  //   Hello, world!
  // </div>
  <div className={`${style.title} ${style.nightMode}`}>Hello, world!</div>
);

export default HelloWorld;
