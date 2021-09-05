import React, { useState, useEffect } from 'react';

const useCounter = (
  initialCount: number,
  callbackFunction: React.EffectCallback,
) => {
  const [count, setCount] = useState(initialCount);

  useEffect(callbackFunction, [count]);

  const add = (added: number) => {
    setCount(count + added);
  };

  return { count, add } as const;
};

export default useCounter;
