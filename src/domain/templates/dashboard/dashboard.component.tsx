import { Children, FormEvent } from 'react';

import S from './dashboard.styles';
import { SearchInput, WeatherList } from './molecules';

import { DashboardProps } from './dashboard.types';

import { groupListItemsByDate } from './utils';

export function Dashboard({
  city,
  setCity,
  results,
  hasError,
  isLoading,
}: DashboardProps): JSX.Element {
  function onSearchInputChange(event: FormEvent<HTMLInputElement>): void {
    if (city === null && isLoading) {
      return;
    }

    setCity(event.currentTarget.value);
  }

  function renderWeatherLists() {
    const groupedListItemsByDate = groupListItemsByDate(results?.list || null);

    if (!groupedListItemsByDate) {
      return null;
    }

    const groupedDataForThreeDays = groupedListItemsByDate.slice(0, 3);
    const weatherLists = groupedDataForThreeDays.map((props) => <WeatherList {...props} />);

    return Children.toArray(weatherLists);
  }

  function renderLocationName() {
    if (!results) {
      return null;
    }

    return <S.StyledBigHeading>{`Weather for: ${results.city.name}`}</S.StyledBigHeading>;
  }

  const errorMessage = hasError ? 'No weather details for the provided city name.' : '';

  return (
    <S.StyledWrapper>
      <SearchInput
        value={city || ''}
        isLoading={isLoading}
        errorMessage={errorMessage}
        onChange={onSearchInputChange}
        placeholder="Search for city..."
        data-test-id="search-for-city-input"
      />
      {renderLocationName()}
      <S.StyledWeatherListsWrapper>{renderWeatherLists()}</S.StyledWeatherListsWrapper>
    </S.StyledWrapper>
  );
}
