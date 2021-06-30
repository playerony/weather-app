import { renderHook } from '@testing-library/react-hooks';

import { functionImportTest } from '@utils';

const useGetMock = jest.fn().mockImplementation((parameter) => parameter);

jest.doMock('@utils', () => {
  const originalModule = jest.requireActual('@utils');

  return {
    __esModule: true,
    ...originalModule,
    useGet: useGetMock,
  };
});

const { useWeather } = require('./use-weather.hook');

describe('useWeather Hook', () => {
  functionImportTest(useWeather);

  it('should call useGet hook with proper url', () => {
    renderHook(() => useWeather('test_city_name'));

    expect(useGetMock).toHaveBeenCalledWith(
      '/data/2.5/forecast?q=test_city_name&appid=29b4ced87609172d9b6777083ee0c9fb',
    );
  });
});
