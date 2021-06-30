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

  function getErrorMessage(): string {
    const isError = hasError || (results === null && !isLoading);

    return isError ? 'Nothing found' : '';
  }

  return (
    <>
      <BigHeading>
        weather app
      </BigHeading>
      <SearchInput
        value={city}
        isLoading={isLoading}
        onChange={onSearchsInputChange}
        errorMessage={getErrorMessage()}
      />
      {JSON.stringify(results?.city)}
    </>
  );
}
