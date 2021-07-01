import { useEffect } from 'react';

import { Dashboard, WeatherApiResponse } from '@domain';

import { useGeolocation, useLocalStorage } from '@utils';
import { useCity, useWeather } from './utils';

export function DashboardPage(): JSX.Element {
  const geolocation = useGeolocation();

  const [lastSelectedCity, setLastSelectedCity] = useLocalStorage<string | null>(
    'last-selected-city',
    null,
  );

  const [city, debouncedCity, setCity] = useCity(lastSelectedCity);

  function getWeatherHookData() {
    const q = debouncedCity !== null ? debouncedCity.trim() : null;
    const coords = debouncedCity === null ? geolocation.coords : null;

    return { q, ...coords };
  }

  const weatherApiResponse = useWeather<WeatherApiResponse>(getWeatherHookData());

  useEffect(() => {
    if (weatherApiResponse.results) {
      setLastSelectedCity(weatherApiResponse.results.city.name);
    }
  }, [weatherApiResponse.results]);

  const isLoading = weatherApiResponse.isLoading || (!geolocation.loaded && !lastSelectedCity);

  return <Dashboard city={city} setCity={setCity} {...weatherApiResponse} isLoading={isLoading} />;
}
