import { functionImportTest } from '@utils';
import { formatTemperature } from './format-temperature.function';

describe('formatTemperature Function', () => {
  functionImportTest(formatTemperature);

  describe('should return formatted temperature', () => {
    expect(formatTemperature(150, true)).toEqual('-123.1');
    expect(formatTemperature(150, false)).toEqual('-189.7');
  });
});
