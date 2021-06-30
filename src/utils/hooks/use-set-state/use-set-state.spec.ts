import { act, renderHook } from '@testing-library/react-hooks';

import { functionImportTest } from '@utils';
import { useSetState } from './use-set-state.hook';

describe('useSetState Hook', () => {
  functionImportTest(useSetState);

  it('should return updated object state', async () => {
    const { result, waitFor } = renderHook(() => useSetState({ test: 'test', test1: 'test1' }));

    const [state, setState] = result.current;

    expect(state).toEqual({ test: 'test', test1: 'test1' });

    act(() => {
      setState({ test1: 'it works' });
    });

    await waitFor(() => {
      expect(result.current[0]).toEqual({ test: 'test', test1: 'it works' });
    });
  });
});
