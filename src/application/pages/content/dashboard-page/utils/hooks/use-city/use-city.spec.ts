import { act, renderHook } from '@testing-library/react-hooks';

import { functionImportTest } from '@utils';
import { useCity } from './use-city.hook';

describe('useCity Hook', () => {
  functionImportTest(useCity);

  it('should return updated value after some time', async () => {
    const { result, waitFor } = renderHook(() => useCity('base'));

    const [city, debouncedCity, setCity] = result.current;
    expect(city).toEqual('base');
    expect(debouncedCity).toEqual('base');

    act(() => {
      setCity('base base');
    });

    await waitFor(() => {
      expect(result.current[1]).toEqual('base base');
    });
  });
});
