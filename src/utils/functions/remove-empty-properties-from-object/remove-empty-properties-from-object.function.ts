import { isObject } from '@utils';

export function removeEmptyPropertiesFromObject<T>(value: T): Partial<T> | null {
  if (!isObject(value)) {
    return null;
  }

  const resultObject: Partial<T> = {};
  const keys = Object.keys(value) as (keyof T)[];

  keys.forEach((_key: keyof T) => {
    const currentObjectValue = value[_key];

    if (currentObjectValue) {
      resultObject[_key] = currentObjectValue;
    }
  });

  return resultObject;
}
