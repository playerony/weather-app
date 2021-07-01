import { isNumber } from '@utils';

export function kelvinToFahrenheit(kelvin: number): number {
  if (!isNumber(kelvin)) {
    return 0;
  }

  const parsedKelvin = kelvin || 1;
  const base = (parsedKelvin * 9) / 5;

  return base - 459.67;
}
