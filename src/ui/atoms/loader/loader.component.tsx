import S from './loader.styles';

import { LoaderProps } from './loader.types';

export const Loader = (props: LoaderProps): JSX.Element => (
  <S.StyledWrapper {...props}>
    <S.StyledLoader />
  </S.StyledWrapper>
);
