import { FormEvent } from 'react';

import { BigHeading } from '@ui';
import { SearchInput } from './molecules';

import { DashboardProps } from './dashboard.types';

export function Dashboard({
  city,
  setCity,
  results,
  hasError,
  isLoading,
}: DashboardProps): JSX.Element {
  const onSearchsInputChange = (event: FormEvent<HTMLInputElement>): void =>
    setCity(event.currentTarget.value);

  const errorMessage = hasError ? 'No weather details for the provided city name.' : '';

  return (
    <>
      <BigHeading>
        weather app
      </BigHeading>
      <SearchInput
        value={city}
        isLoading={isLoading}
        errorMessage={errorMessage}
        onChange={onSearchsInputChange}
      />
      {JSON.stringify(results?.city)}
    </>
  );
}
