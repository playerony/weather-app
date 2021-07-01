import styled from 'styled-components';

import { CenterBlock, BigHeading } from '@ui';

import { spacing } from '@infrastructure';

const StyledWrapper = styled(CenterBlock)`
  justify-content: start;
  padding-top: ${spacing.medium};
`;

const StyledBigHeading = styled(BigHeading)`
  padding-top: ${spacing.medium};
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
