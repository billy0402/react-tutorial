import { useState, useEffect } from 'react';

const useCounter = (initialCount, callbackFunction) => {
  const [count, setCount] = useState(initialCount);

  useEffect(callbackFunction, [count]);

  const add = (added) => {
    setCount(count + added);
  };

  return { count, add };
};

export default useCounter;
