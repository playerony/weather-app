import { useState } from 'react';

import { useDebounce } from '@utils';

import { Output } from './use-city.types';

export function useCity(initialValue: string | null): Output {
  const [city, setCity] = useState<string | null>(initialValue);

  const debouncedCity = useDebounce(city, 500);

  return [city, debouncedCity, setCity];
}
