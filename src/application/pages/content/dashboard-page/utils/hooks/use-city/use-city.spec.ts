import { act, renderHook } from '@testing-library/react-hooks';

import { useCity } from './use-city.hook';
import { functionImportTest } from '@utils';

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
