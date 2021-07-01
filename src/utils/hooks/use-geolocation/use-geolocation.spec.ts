import { renderHook } from '@testing-library/react-hooks';

import { useGeolocation, functionImportTest } from '@utils';

describe('useGeolocation Hook', () => {
  functionImportTest(useGeolocation);

  it('should return user`s geolocation', async () => {
    const { result } = renderHook(() => useGeolocation());

    expect(result.current).toEqual({
      coords: {
        lat: 50,
        lon: 50,
      },
      loaded: true,
      hasError: false,
    });
  });
});
