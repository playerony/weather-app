import styled from 'styled-components';
import { applyStyleModifiers, ModifiersConfig } from 'styled-components-modifiers';

import { typeScale, fontWeight, respondToMax } from '@infrastructure';

import { BigHeadingProps } from './big-heading.types';

const BIG_HEADING_MODIFIERS: ModifiersConfig = {
  center: () => `
    text-align: center;
  `,
};

const StyledBigHeading = styled.h1<BigHeadingProps>`
  margin: 0;
  padding: 0;
  line-height: 1.1;
  font-size: ${typeScale.h1};
  font-weight: ${fontWeight.bold};

  ${respondToMax.xmobile`
    font-size: ${typeScale.h3};
  `}

  ${applyStyleModifiers(BIG_HEADING_MODIFIERS)}
`;

const S = {
  StyledBigHeading,
};

export default S;
