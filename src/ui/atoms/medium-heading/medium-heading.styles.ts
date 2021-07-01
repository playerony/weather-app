import styled from 'styled-components';
import { applyStyleModifiers, ModifiersConfig } from 'styled-components-modifiers';

import { typeScale, fontWeight, respondToMax } from '@infrastructure';

import { MediumHeadingProps } from './medium-heading.types';

const MEDIUM_HEADING_MODIFIERS: ModifiersConfig = {
  center: () => `
    text-align: center;
  `,
};

const StyledMediumHeading = styled.h2<MediumHeadingProps>`
  margin: 0;
  padding: 0;
  line-height: 1.1;
  font-size: ${typeScale.h2};
  font-weight: ${fontWeight.bold};

  ${respondToMax.xmobile`
    font-size: ${typeScale.h4};
  `}

  ${applyStyleModifiers(MEDIUM_HEADING_MODIFIERS)}
`;

const S = {
  StyledMediumHeading,
};

export default S;
