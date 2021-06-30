import { Coord } from '.';

export interface City {
  id: number;
  sunset: number;
  country: number;
  sunrise: number;
  timezone: number;
  population: number;

  name: string;

  coord: Coord;
}
