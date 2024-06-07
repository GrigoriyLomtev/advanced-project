import { useRef, useCallback } from 'react';

export function useThrottle(callback: (...args: any[]) => void, delay: number) {
  const throttleRef = useRef(false);

  return useCallback((...args: any[]) => {
    if (!throttleRef.current) {
      callback(...args);
      throttleRef.current = true;

      setTimeout(() => {
        throttleRef.current = false;
      }, delay);
    }
  }, [callback, delay]);

  // const lastCall = useRef(0);

  // return useCallback(() => {
  //   const now = Date.now();
  //   if (now - lastCall.current >= delay) {
  //     lastCall.current = now;
  //     callback();
  //   }
  // }, [callback, delay]);
}
