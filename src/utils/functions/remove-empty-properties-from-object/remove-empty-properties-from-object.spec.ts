import { functionImportTest, removeEmptyPropertiesFromObject } from '@utils';

describe('removeEmptyPropertiesFromObject Function', () => {
  functionImportTest(removeEmptyPropertiesFromObject);

  it('should return null when passed value is not an object', () => {
    expect(removeEmptyPropertiesFromObject([])).toBeNull();
    expect(removeEmptyPropertiesFromObject('')).toBeNull();
    expect(removeEmptyPropertiesFromObject(123)).toBeNull();
    expect(removeEmptyPropertiesFromObject(() => {})).toBeNull();
  });

  it('should remove empty properties from object', () => {
    const inputData = {
      test1: 'test1',
      test2: null,
      test3: undefined,
      test4: 0,
      test5: 100,
      test6: '',
    };

    const expectedOutput = {
      test1: 'test1',
      test4: 0,
      test5: 100,
      test6: '',
    };

    expect(removeEmptyPropertiesFromObject(inputData)).toEqual(expectedOutput);
  });
});
