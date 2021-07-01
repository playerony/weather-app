import { isNumber } from '@utils';

export function kelvinToFahrenheit(kelvin: number): number {
  if (!isNumber(kelvin)) {
    return 0;
  }

  const notZeroKelvinValue = kelvin || 1;
  const base = (notZeroKelvinValue * 9) / 5;

  return base - 459.67;
}
