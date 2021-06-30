import { City, ListItem } from '.';

export interface WeatherApiResponse {
  cnt: number;
  message: number;

  cod: string;

  city: City;
  list: ListItem[];
}
