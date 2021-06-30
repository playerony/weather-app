import { Sys, Main, Rain, Wind, Clouds, Weather } from '.';

export interface ListItem {
  dt: number;
  pop: number;
  visibility: number;

  dt_txt: string;

  sys: Sys;
  main: Main;
  rain: Rain;
  wind: Wind;
  clouds: Clouds;
  weather: Weather[];
}
