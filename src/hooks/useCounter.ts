import {useCallback, useState} from 'react';

export const UseCounter = (initialState: number) => {
  const [counter, setCounter] = useState(initialState)

  const increment = useCallback(() => setCounter(prev => prev + 1), [])
  const decrement = useCallback(() => setCounter(prev => prev - 1), [])
  const reset = useCallback(() => setCounter(0), [])
  return {
    counter, increment, decrement, reset
  }
};
