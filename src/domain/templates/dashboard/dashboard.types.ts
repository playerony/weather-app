import { WeatherApiResponse } from './types';

export interface DashboardProps {
  hasError: boolean;
  isLoading: boolean;
  results: WeatherApiResponse | null;

  city: string;
  setCity: (city: string) => void;
}
