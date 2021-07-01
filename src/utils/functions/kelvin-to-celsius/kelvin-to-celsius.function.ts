import { isNumber } from '@utils';

export function kelvinToCelsius(kelvin: number): number {
  if (!isNumber(kelvin)) {
    return 0;
  }

  return kelvin - 273.15;
}
