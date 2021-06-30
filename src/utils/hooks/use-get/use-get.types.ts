export interface State<ResultsType> {
  hasError: boolean;
  isLoading: boolean;
  results: ResultsType | null;
}
