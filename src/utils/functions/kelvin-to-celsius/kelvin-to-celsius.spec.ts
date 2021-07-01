import { kelvinToCelsius, functionImportTest } from '@utils';

describe('kelvinToCelsius Function', () => {
  functionImportTest(kelvinToCelsius);

  it('should return 0 when provided value is not a number', () => {
    // @ts-ignore
    expect(kelvinToCelsius('')).toEqual(0);

    // @ts-ignore
    expect(kelvinToCelsius(null)).toEqual(0);

    // @ts-ignore
    expect(kelvinToCelsius(undefined)).toEqual(0);
  });

  it('should convert kelvin to celsius', () => {
    expect(kelvinToCelsius(0)).toEqual(-273.15);
    expect(kelvinToCelsius(290)).toEqual(16.850000000000023);
    expect(kelvinToCelsius(250)).toEqual(-23.149999999999977);
  });
});
