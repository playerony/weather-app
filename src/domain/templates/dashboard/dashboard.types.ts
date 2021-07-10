import { WeatherApiResponse } from './types';

export interface DashboardProps {
  hasError: boolean;
  isLoading: boolean;
  city: string | null;
  results: WeatherApiResponse | null;

  setCity: (city: string) => void;
}
