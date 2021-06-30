import { act, renderHook } from '@testing-library/react-hooks';

import { functionImportTest } from '@utils';
import { useLocalStorage } from './use-local-storage.hook';

describe('useLocalStorage Hook', () => {
  functionImportTest(useLocalStorage);

  beforeEach(() => {
    localStorage.clear();
    jest.clearAllMocks();
  });

  it('should save and return value saved in localStorage', async () => {
    const { result, waitFor } = renderHook(() => useLocalStorage('key', 'value'));

    const [state, setState] = result.current;

    expect(state).toEqual('value');

    act(() => {
      setState('new value');
    });

    await waitFor(() => {
      expect(result.current[0]).toEqual('new value');
    });
  });
});
