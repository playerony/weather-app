import { isObject, functionImportTest } from '@utils';

describe('isObject Function', () => {
  functionImportTest(isObject);

  it('should return false when provided parameter is not an object', () => {
    expect(isObject(1)).toBeFalsy();
    expect(isObject([])).toBeFalsy();
    expect(isObject('')).toBeFalsy();
    expect(isObject(NaN)).toBeFalsy();
    expect(isObject(null)).toBeFalsy();
    expect(isObject(true)).toBeFalsy();
    expect(isObject('123')).toBeFalsy();
    expect(isObject(Infinity)).toBeFalsy();
    expect(isObject(() => {})).toBeFalsy();
    expect(isObject(-Infinity)).toBeFalsy();
    expect(isObject(undefined)).toBeFalsy();
  });

  it('should return true when provided parameter is an object', () => {
    expect(isObject({})).toBeTruthy();
    expect(isObject({ x: 1 })).toBeTruthy();
  });
});
