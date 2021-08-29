import React from 'react';

import style from './index.scss';

// const Article = () =>
//   React.createElement('div', { class: 'article' }, [
//     React.createElement('p', { class: 'content' }, [
//       React.createElement('span', { class: 'inlineCode' }, 'createElement'),
//       '是 React 的頂層 API',
//     ]),
//   ]);

const Article = () => (
  <div className='article'>
    <p className='content'>
      <span className='inlineCode'>createElement</span>是 React 的頂層 API
    </p>
  </div>
);

export default Article;
