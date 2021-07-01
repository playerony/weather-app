import { isObject, isNumber, isString } from '@utils';

export function removeEmptyPropertiesFromObject<T>(value: T): Partial<T> | null {
  if (!isObject(value)) {
    return null;
  }

  const resultObject: Partial<T> = {};
  const keys = Object.keys(value) as (keyof T)[];

  keys.forEach((_key) => {
    const currentObjectValue = value[_key];
    const isNumberValue = isNumber(currentObjectValue);
    const isStringValue = isString(currentObjectValue);

    if (currentObjectValue || isNumberValue || isStringValue) {
      resultObject[_key] = currentObjectValue;
    }
  });

  return resultObject;
}
