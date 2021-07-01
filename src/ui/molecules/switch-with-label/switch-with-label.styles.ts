import styled from 'styled-components';

import { Label } from '@ui';

import { spacing } from '@infrastructure';

const StyledWrapper = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  max-width: fit-content;
`;

const StyledLabel = styled(Label)`
  padding-right: ${spacing.xsmall};
`;

const S = {
  StyledLabel,
  StyledWrapper,
};

export default S;
