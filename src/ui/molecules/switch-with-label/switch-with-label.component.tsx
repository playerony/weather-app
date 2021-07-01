import { Switch } from '@ui';

import S from './switch-with-label.styles';

import { SwitchWithLabelProps } from './switch-with-label.types';

export const SwitchWithLabel = ({ label, ...switchProps }: SwitchWithLabelProps): JSX.Element => (
  <S.StyledWrapper>
    {label ? <S.StyledLabel>{label}</S.StyledLabel> : null}
    <Switch {...switchProps} />
  </S.StyledWrapper>
);
