import { useState } from 'react';

import { tryParseJSON } from '@utils';
import { storageFactory } from '@infrastructure';

export function useLocalStorage<T>(key: string, initialValue?: T): [T, (value: T) => void] {
  const localStorageFactory = storageFactory(() => window.localStorage);

  const [storedValue, setStoredValue] = useState(getInitialStoredValue);

  function getInitialStoredValue() {
    const item = localStorageFactory.getItem(key);

    if (item) {
      const parsedItem = tryParseJSON(item);

      return parsedItem || initialValue;
    }

    return initialValue;
  }

  function setValue(value: T) {
    setStoredValue(value);

    localStorageFactory.setItem(key, JSON.stringify(value));
  }

  return [storedValue, setValue];
}
