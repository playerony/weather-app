import S from './input-with-loader.styles';

import { InputWithLoaderProps } from './input-with-loader.types';

export const InputWithLoader = ({
  isLoading,
  ...inputProps
}: InputWithLoaderProps): JSX.Element => (
  <S.StyledWrapper>
    <S.StyledInput {...inputProps} />
    {isLoading ? <S.StyledLoader modifiers={['small']} /> : null}
  </S.StyledWrapper>
);
