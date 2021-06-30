import { Children, FormEvent } from 'react';

import { BigHeading } from '@ui';
import S from './dashboard.styles';
import { SearchInput, WeatherList } from './molecules';

import { DashboardProps } from './dashboard.types';

import { getDataForThreeDays, groupListItemsByDate } from './utils';

export function Dashboard({
  city,
  setCity,
  results,
  hasError,
  isLoading,
}: DashboardProps): JSX.Element {
  const onSearchInputChange = (event: FormEvent<HTMLInputElement>): void =>
    setCity(event.currentTarget.value.trim());

  const errorMessage = hasError ? 'No weather details for the provided city name.' : '';

  const dataForThreeDays = getDataForThreeDays(results);
  const groupedListItemsByDate = groupListItemsByDate(dataForThreeDays);

  function renderGroupedData() {
    if (!groupedListItemsByDate) {
      return null;
    }

    const weatherLists = groupedListItemsByDate.map((props) => <WeatherList {...props} />);

    return Children.toArray(weatherLists);
  }

  return (
    <S.StyledWrapper>
      <BigHeading>weather app</BigHeading>
      <SearchInput
        value={city}
        isLoading={isLoading}
        errorMessage={errorMessage}
        onChange={onSearchInputChange}
        placeholder="Search for city..."
      />
      {results ? <BigHeading>Weather for: {results.city.name}</BigHeading> : null}
      {renderGroupedData()}
    </S.StyledWrapper>
  );
}
