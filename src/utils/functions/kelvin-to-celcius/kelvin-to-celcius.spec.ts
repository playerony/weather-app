import { kelvinToCelcius, functionImportTest } from '@utils';

describe('kelvinToCelcius Function', () => {
  functionImportTest(kelvinToCelcius);

  it('should return 0 when provided value is not a number', () => {
    // @ts-ignore
    expect(kelvinToCelcius('')).toEqual(0);

    // @ts-ignore
    expect(kelvinToCelcius(null)).toEqual(0);

    // @ts-ignore
    expect(kelvinToCelcius(undefined)).toEqual(0);
  });

  it('should convert kelvin to celcius', () => {
    expect(kelvinToCelcius(0)).toEqual(-273.15);
    expect(kelvinToCelcius(290)).toEqual(16.850000000000023);
    expect(kelvinToCelcius(250)).toEqual(-23.149999999999977);
  });
});
