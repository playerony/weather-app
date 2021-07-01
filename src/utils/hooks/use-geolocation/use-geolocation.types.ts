interface Coord {
  lat: number;
  lon: number;
}

export interface State {
  loaded: boolean;
  hasError: boolean;
  coords: Coord | null;
}
