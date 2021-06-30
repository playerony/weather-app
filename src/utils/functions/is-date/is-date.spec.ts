import { isDate, functionImportTest } from '@utils';

describe('isDate Function', () => {
  functionImportTest(isDate);

  it('should return false when provided parameter is not a date', () => {
    expect(isDate({})).toBeFalsy();
    expect(isDate('')).toBeFalsy();
    expect(isDate(null)).toBeFalsy();
    expect(isDate(-500)).toBeFalsy();
    expect(isDate('123')).toBeFalsy();
    expect(isDate(undefined)).toBeFalsy();
    expect(isDate([1, 2, 3])).toBeFalsy();
    expect(isDate(String('test'))).toBeFalsy();
  });

  it('should return true when provided parameter is a date', () => {
    expect(isDate(new Date())).toBeTruthy();
  });
});
