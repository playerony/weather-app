import { tryParseJSON, functionImportTest } from '@utils';

describe('tryParseJSON Function', () => {
  functionImportTest(tryParseJSON);

  it('should return null when provided parameter is not a string value', () => {
    expect(tryParseJSON('')).toBeNull();

    // @ts-ignore
    expect(tryParseJSON(null)).toBeNull();

    // @ts-ignore
    expect(tryParseJSON(undefined)).toBeNull();
  });

  it('should return object when passed parameter can be parsed', () => {
    const data = { test: 'test' };

    expect(tryParseJSON(JSON.stringify(data))).toEqual(data);
  });
});
