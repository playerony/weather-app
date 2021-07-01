import { isNumber } from '@utils';

export function kelvinToCelcius(kelvin: number): number {
  if (!isNumber(kelvin)) {
    return 0;
  }

  return 300 - kelvin;
}
