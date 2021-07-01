import { useGet, removeEmptyPropertiesFromObject } from '@utils';

import { Input } from './use-weather.types';

import { serializeQueryParams } from '../..';

const API_KEY = '29b4ced87609172d9b6777083ee0c9fb';

function makeApiUrl(inputData: Input): string {
  const inputDataWithFilteredValues = removeEmptyPropertiesFromObject(inputData);

  if (!inputDataWithFilteredValues) {
    return '';
  }

  const serializedQueryParams = serializeQueryParams(inputDataWithFilteredValues);

  if (!serializedQueryParams) {
    return '';
  }

  return `/data/2.5/forecast?${serializedQueryParams}&appid=${API_KEY}`;
}

export const useWeather = <ResponseType>(inputData: Input) =>
  useGet<ResponseType>(makeApiUrl(inputData));
