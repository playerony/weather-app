import styled, { css } from 'styled-components';

import { typeScale, fontWeight, respondToMax } from '@infrastructure';

import { StyledLabelProps } from './label.types';

const StyledLabel = styled.label<StyledLabelProps>`
  margin: 0;
  padding: 0;
  display: block;
  font-size: ${typeScale.paragraph};

  ${({ strong }) =>
    css`
      font-weight: ${strong === true ? fontWeight.bold : fontWeight.normal};
    `}

  ${({ sameLine }) =>
    sameLine &&
    css`
      display: contents;
    `}

  ${({ pointer }) =>
    pointer &&
    css`
      cursor: pointer;
    `}


  ${({ theme, error }) =>
    error &&
    css`
      color: ${theme.color.errorColor};
    `}
  
  ${respondToMax.mobile`
    font-size: ${typeScale.helperText};
  `}

  ${respondToMax.xmobile`
    font-size: ${typeScale.copyrightText};
  `}
`;

const S = {
  StyledLabel,
};

export default S;
