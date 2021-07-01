import styled from 'styled-components';

import { spacing, respondToMax } from '@infrastructure';

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 ${spacing.small};

  & > *:not(:first-child) {
    padding-left: ${spacing.small};

    ${respondToMax.xmobile`
      padding-left: ${spacing.xsmall};
    `}
  }

  ${respondToMax.xmobile`
    padding: 0;
  `}
`;

const StyledImage = styled.img`
  ${respondToMax.xmobile`
    width: 30px;
  `}
`;

const S = {
  StyledImage,
  StyledWrapper,
};

export default S;
