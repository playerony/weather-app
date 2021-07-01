import { kelvinToCelcius, kelvinToFahrenheit } from '@utils';

export function formatTemperature(kelvin: number, isCelsius: boolean): string {
  const temperatureInCelcius = kelvinToCelcius(kelvin);
  const temperatureInFahrenheit = kelvinToFahrenheit(kelvin);

  const temperatureForSelectedUnit = isCelsius ? temperatureInCelcius : temperatureInFahrenheit;

  return temperatureForSelectedUnit.toFixed(1);
}
