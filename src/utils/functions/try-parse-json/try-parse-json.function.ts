import { isString } from '@utils';

export function tryParseJSON<T = any>(jsonString: string): T | null {
  if (!isString(jsonString)) {
    return null;
  }

  try {
    const result = JSON.parse(jsonString);

    return result;
  } catch {
    return null;
  }
}
