import React from 'react';

import SayHello from '../../components/SayHello';

const names = ['world', null, 'noBody', 'air', 'water'];

const Home = () => (
  <>
    {names.map((name) => (
      <SayHello key={name} name={name} />
    ))}
  </>
);

export default Home;
