import { WeatherApiResponse } from './types';

export interface DashboardProps {
  hasError: boolean;
  isLoading: boolean;
  results: WeatherApiResponse | null;

  city: string | null;
  setCity: (city: string) => void;
}
