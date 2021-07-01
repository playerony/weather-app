import { useEffect } from 'react';

import { useSetState } from '@utils';

import { State } from './use-geolocation.types';

const isGeolocationSupport = (): boolean => 'geolocation' in window.navigator;

export function useGeolocation(): State {
  const [state, setState] = useSetState<State>({
    coords: null,
    loaded: false,
    hasError: false,
  });

  function onSuccess({ coords: { latitude: lat, longitude: lon } }: GeolocationPosition) {
    setState({
      loaded: true,
      coords: {
        lat,
        lon,
      },
    });
  }

  function onError(): void {
    setState({
      loaded: true,
      hasError: true,
    });
  }

  useEffect(() => {
    const geolocationSupport = isGeolocationSupport();

    if (!geolocationSupport) {
      setState({
        loaded: true,
      });

      return;
    }

    window.navigator.geolocation.getCurrentPosition(onSuccess, onError);
  }, []);

  return state;
}
