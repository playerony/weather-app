import styled from 'styled-components';

import { CenterBlock } from '@ui';

import { spacing } from '@infrastructure';

const StyledWrapper = styled(CenterBlock)`
  justify-content: end;
`;

const StyledWeatherListsWrapper = styled.div`
  display: grid;
  padding-top: ${spacing.medium};
`;

const S = {
  StyledWrapper,
  StyledWeatherListsWrapper,
};

export default S;
