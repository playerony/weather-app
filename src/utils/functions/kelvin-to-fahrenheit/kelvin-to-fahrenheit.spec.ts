import { functionImportTest, kelvinToFahrenheit } from '@utils';

describe('kelvinToFahrenheit Function', () => {
  functionImportTest(kelvinToFahrenheit);

  it('should return 0 when provided value is not a number', () => {
    // @ts-ignore
    expect(kelvinToFahrenheit('')).toEqual(0);

    // @ts-ignore
    expect(kelvinToFahrenheit(null)).toEqual(0);

    // @ts-ignore
    expect(kelvinToFahrenheit(undefined)).toEqual(0);
  });

  it('should covner kelvin to fahrenheit', () => {
    expect(kelvinToFahrenheit(0)).toEqual(-457.87);
    expect(kelvinToFahrenheit(250)).toEqual(-9.670000000000016);
    expect(kelvinToFahrenheit(290)).toEqual(62.329999999999984);
  });
});
