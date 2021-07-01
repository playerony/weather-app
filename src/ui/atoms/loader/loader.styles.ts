import styled from 'styled-components';
import { size, cover, animation, borderColor } from 'polished';
import { applyStyleModifiers, ModifiersConfig } from 'styled-components-modifiers';

import { radius } from '@infrastructure';

import { LoaderProps } from './loader.types';

const LOADER_MODIFIERS: ModifiersConfig = {
  small: () => `
    width: 20px;
    height: 20px;

    &::after,
    &::before {
      border-radius: ${radius.default};
    }
  `,
  default: () => `
    width: 40px;
    height: 40px;

    &::after,
    &::before {
      border-radius: ${radius.large};
    }
  `,
  large: () => `
    width: 60px;
    height: 60px;

    &::after,
    &::before {
      border-radius: 30px;
    }
  `,
};

const StyledWrapper = styled.div<LoaderProps>`
  ${size(40, 40)}

  position: relative;

  ${applyStyleModifiers(LOADER_MODIFIERS)}
`;

const StyledLoader = styled.div`
  ${size('100%', '100%')}
  ${animation(['around', '5,4s', 'infinite'])}

  position: relative;
  display: inline-block;
  background-color: transparent;

  &::after,
  &::before {
    ${cover()}
    ${size('100%', '100%')}
    ${animation(['around', '0.7s', 'ease-in-out', 'infinite'])}
    ${({ theme }) =>
      borderColor(theme.color.primaryColor, theme.color.primaryColor, 'transparent', 'transparent')}

    content: '';
    border-width: 2px;
    border-style: solid;
    border-radius: 30px;
    display: inline-block;
    box-sizing: border-box;
    background: transparent;
  }

  &::after {
    background: transparent;
    ${animation(['around', '0.7s', 'ease-in-out', '0.1s', 'infinite'])}
  }

  @keyframes around {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const S = {
  StyledLoader,
  StyledWrapper,
};

export default S;
