import styled from 'styled-components';
import { transitions } from 'polished';

import { typeScale, spacing } from '@infrastructure';

import { InputProps } from './input.types';

const StyledInput = styled.input<InputProps>`
  ${transitions('color 0.3s ease-in-out', 'background-color 0.3s ease-in-out')}

  border: none;
  min-width: 200px;
  font-size: ${typeScale.h1};
  background-color: transparent;
  border-bottom: 2px solid currentColor;
  padding: ${spacing.xmedium} ${spacing.xmedium};

  &::placeholder {
    color: currentColor;
  }

  &:focus {
    outline: none;
  }

  &:disabled {
    color: ${({ theme }) => theme.color.textOnDisabled};
    background-color: ${({ theme }) => theme.color.disabled};
  }
`;

const S = {
  StyledInput,
};

export default S;
