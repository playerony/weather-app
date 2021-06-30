import { useGet } from '@utils';

const API_KEY = '29b4ced87609172d9b6777083ee0c9fb';

const makeApiUrl = (city: string): string => `/data/2.5/forecast?q=${city}&appid=${API_KEY}`;

export const useWeather = <ResponseType>(city: string) => useGet<ResponseType>(makeApiUrl(city));
