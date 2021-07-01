import { kelvinToCelsius, kelvinToFahrenheit } from '@utils';

export function formatTemperature(kelvin: number, isCelsius: boolean): string {
  const temperatureInCelsius = kelvinToCelsius(kelvin);
  const temperatureInFahrenheit = kelvinToFahrenheit(kelvin);

  const temperatureForSelectedUnit = isCelsius ? temperatureInCelsius : temperatureInFahrenheit;

  return temperatureForSelectedUnit.toFixed(1);
}
