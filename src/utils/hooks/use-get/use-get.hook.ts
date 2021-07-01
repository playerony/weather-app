import { useEffect } from 'react';
import { AxiosResponse } from 'axios';

import { useSetState } from '@utils';
import { axiosInstance } from '@infrastructure';

import { State } from './use-get.types';

export function useGet<ResultsType>(url: string = ''): State<ResultsType> {
  const [state, setState] = useSetState<State<ResultsType>>({
    results: null,
    hasError: false,
    isLoading: false,
  });

  function onSuccess(response: AxiosResponse<ResultsType>, didCancel: boolean): void {
    if (!didCancel && response?.status === 200) {
      setState({
        hasError: false,
        isLoading: false,
        results: response.data,
      });
    } else {
      throw new Error('Status is not 200');
    }
  }

  function onError(didCancel: boolean): void {
    if (!didCancel) {
      setState({
        hasError: true,
        isLoading: false,
      });
    }
  }

  useEffect(() => {
    let didCancel = false;

    async function get() {
      if (url) {
        setState({
          isLoading: true,
          hasError: false,
        });

        try {
          const response: AxiosResponse<ResultsType> = await axiosInstance.get(url);

          onSuccess(response, didCancel);
        } catch (error) {
          onError(didCancel);
        }
      }
    }

    get();

    return () => {
      didCancel = true;
    };
  }, [url]);

  return state;
}
