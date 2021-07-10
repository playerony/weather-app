import { isObject } from '@utils';

export function serializeQueryParams<T>(value: T): string | null {
  if (!isObject(value)) {
    return null;
  }

  const result: string[] = [];
  const keys = Object.keys(value) as (keyof T)[];

  keys.forEach((_key) => {
    const currentObjectValue = value[_key] || '';

    if (currentObjectValue) {
      const objectValue = currentObjectValue || '';
      const encodedKey = encodeURIComponent(_key as string);
      const encodedObjectValue = encodeURIComponent(objectValue as string);

      result.push(`${encodedKey}=${encodedObjectValue}`);
    }
  });

  return result.join('&');
}
