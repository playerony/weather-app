import S from './switch.styles';

import { SwitchProps } from './switch.types';

export const Switch = ({ onClick, ...inputProps }: SwitchProps): JSX.Element => (
  <S.StyledWrapper onClick={onClick}>
    <S.StyledInput {...inputProps} type="checkbox" />
    <S.StyledSlider />
  </S.StyledWrapper>
);
