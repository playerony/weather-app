import { useEffect, useState } from 'react';

export function useDebounce<ValueType>(value: ValueType, delay: number): ValueType {
  const [debouncedValue, setDebouncedValue] = useState<ValueType>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}
