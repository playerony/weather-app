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

  function onFetchSuccess(response: AxiosResponse<ResultsType>, didCancel: boolean) {
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

  function onFetchError(didCancel: boolean) {
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

          onFetchSuccess(response, didCancel);
        } catch (error) {
          onFetchError(didCancel);
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
