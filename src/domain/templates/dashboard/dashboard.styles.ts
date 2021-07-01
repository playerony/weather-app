import styled from 'styled-components';

import { CenterBlock, BigHeading } from '@ui';

import { spacing, respondToMax } from '@infrastructure';

const StyledWrapper = styled(CenterBlock)`
  justify-content: start;
  padding-top: ${spacing.medium};

  ${respondToMax.mobile`
    padding-top: ${spacing.xmedium};
  `}

  ${respondToMax.xmobile`
    padding-top: ${spacing.small};
  `}
`;

const StyledBigHeading = styled(BigHeading)`
  padding-top: ${spacing.medium};

  ${respondToMax.mobile`
    padding-top: ${spacing.xmedium};
  `}

  ${respondToMax.xmobile`
    padding-top: ${spacing.small};
  `}
`;

const StyledWeatherListsWrapper = styled.div`
  display: grid;
`;

const S = {
  StyledWrapper,
  StyledBigHeading,
  StyledWeatherListsWrapper,
};

export default S;
