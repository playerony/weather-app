import { useGet, removeEmptyPropertiesFromObject } from '@utils';

import { Input } from './use-weather.types';

const API_KEY = '29b4ced87609172d9b6777083ee0c9fb';

function serialize(obj: Partial<Input>): string {
  const result: string[] = [];
  const keys = Object.keys(obj) as (keyof Input)[];

  keys.forEach((_key) => {
    if (obj.hasOwnProperty(_key)) {
      const objectValue = obj[_key] || '';

      result.push(`${encodeURIComponent(_key)}=${encodeURIComponent(objectValue)}`);
    }
  });

  return result.join('&');
}

function makeApiUrl(inputData: Input): string {
  const inputDataWithFilteredValues = removeEmptyPropertiesFromObject(inputData);

  if (!inputDataWithFilteredValues) {
    return '';
  }

  const queryParams = serialize(inputDataWithFilteredValues);

  if (!queryParams) {
    return '';
  }

  return `/data/2.5/forecast?${serialize(inputDataWithFilteredValues)}&appid=${API_KEY}`;
}

export const useWeather = <ResponseType>(inputData: Input) =>
  useGet<ResponseType>(makeApiUrl(inputData));
