import { useRef, useCallback, useEffect } from 'react';

export function useThrottle(callback: (...args: any[]) => void, delay: number) {
  const throttleRef = useRef(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const throttledFunction = useCallback((...args: any[]) => {
    if (!throttleRef.current) {
      callback(...args);
      throttleRef.current = true;

      timerRef.current = setTimeout(() => {
        throttleRef.current = false;
      }, delay);
    }
  }, [callback, delay]);

  useEffect(() => () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
  }, []);

  return throttledFunction;
}
