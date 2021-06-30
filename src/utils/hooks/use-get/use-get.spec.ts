import MockAdapter from 'axios-mock-adapter';
import { renderHook } from '@testing-library/react-hooks';

import { axiosInstance } from '@infrastructure';
import { useGet, functionImportTest } from '@utils';

const dataMock = [{ record: 'test' }];

describe('useGet Hook', () => {
  functionImportTest(useGet);

  const axiosMock = new MockAdapter(axiosInstance);

  it('should keep results data as null until isLoading flag is set to true', async () => {
    axiosMock.onGet('/users-list').reply(200, dataMock);

    const { result, waitFor } = renderHook(() => useGet('/users-list'));

    expect(result.current).toEqual({
      results: null,
      isLoading: true,
      hasError: false,
    });

    await waitFor(() => {
      expect(result.current).toEqual({
        hasError: false,
        isLoading: false,
        results: dataMock,
      });
    });
  });

  it('should set hasError flag to true when response data does not contain 200 status code', async () => {
    axiosMock.onGet('/users-list-with-error').networkError();

    const { result, waitFor } = renderHook(() => useGet('/users-list-with-error'));

    expect(result.current).toEqual({
      results: null,
      isLoading: true,
      hasError: false,
    });

    await waitFor(() => {
      expect(result.current).toEqual({
        results: null,
        hasError: true,
        isLoading: false,
      });
    });
  });
});
