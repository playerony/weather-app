import { functionImportTest } from '@utils';

import { serializeQueryParams } from '..';

describe('serializeQueryParams Function', () => {
  functionImportTest(serializeQueryParams);

  it('should return null when passed value is not an object', () => {
    expect(serializeQueryParams([])).toBeNull();
    expect(serializeQueryParams('')).toBeNull();
    expect(serializeQueryParams(123)).toBeNull();
    expect(serializeQueryParams(() => {})).toBeNull();
  });

  it('should serialize provided object value', () => {
    const inputData = {
      test1: 'test1',
      test2: null,
      test3: 50,
      test4: 0,
      test5: 100,
      test6: '',
    };

    expect(serializeQueryParams(inputData)).toEqual('test1=test1&test3=50&test5=100');
  });
});
