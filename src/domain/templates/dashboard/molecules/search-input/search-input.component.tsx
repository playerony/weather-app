import { Label, InputWithLoader } from '@ui';

import { SearchInputProps } from './search-input.types';

export const SearchInput = ({
  errorMessage,
  ...inputWithLoaderProps
}: SearchInputProps): JSX.Element => (
  <>
    <InputWithLoader {...inputWithLoaderProps} />
    {errorMessage && <Label error>{errorMessage}</Label>}
  </>
);
