import React from 'react';

import style from './index.scss';

const SayHello = (props) => (
  <div
    style={
      props.name === null
        ? { color: '#ffffff', backgroundColor: '#000000' }
        : {}
    }
  >
    {`Hello, ${props.name === null ? 'noBody' : props.name}!`}
  </div>
);

export default SayHello;
