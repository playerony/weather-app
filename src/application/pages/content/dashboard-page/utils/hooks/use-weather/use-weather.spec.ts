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

  it('should return empty string when passed parameter is a falsy value or does not contain any object keys', () => {
    const { result } = renderHook(() => useWeather({}));

    expect(result.current).toEqual('');
  });

  it('should return empty string when passed object contain properties with falsy values', () => {
    const { result } = renderHook(() => useWeather({ lon: undefined }));

    expect(result.current).toEqual('');
  });

  it('should call useGet hook with proper url', () => {
    const inputData = {
      lat: 50,
      q: 'test_city',
      lon: undefined,
    };

    renderHook(() => useWeather(inputData));

    expect(useGetMock).toHaveBeenCalledWith(
      '/data/2.5/forecast?lat=50&q=test_city&appid=29b4ced87609172d9b6777083ee0c9fb',
    );
  });
});
