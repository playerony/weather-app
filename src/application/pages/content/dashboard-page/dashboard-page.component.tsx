import { useState } from 'react';

import { Dashboard, WeatherApiResponse } from '@domain';

import { useDebounce } from '@utils';
import { useWeather } from './utils';

export function DashboardPage(): JSX.Element {
  // TODO - geolocation at default
  // TODO - keep it in localstorage
  const defaultCity = 'Kraków';
  const [city, setCity] = useState<string>(defaultCity);

  const debouncedCity = useDebounce(city, 300);

  const weatherApiResponse = useWeather<WeatherApiResponse>(debouncedCity);

  return <Dashboard city={city} setCity={setCity} {...weatherApiResponse} />;
}
