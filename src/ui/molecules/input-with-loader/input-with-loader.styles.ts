import { cover } from 'polished';
import styled from 'styled-components';

import { Input, Loader } from '@ui';

import { spacing } from '@infrastructure';

const StyledWrapper = styled.div`
  position: relative;
  display: inline-block;
  max-width: fit-content;
`;

const StyledInput = styled(Input)`
  padding-right: ${spacing.large};
  margin-bottom: ${spacing.xsmall};
`;

const StyledLoader = styled(Loader)`
  ${cover()}

  top: 50%;
  left: auto;
  right: ${spacing.medium};

  & > div {
    top: -50%;
  }
`;

const S = {
  StyledInput,
  StyledLoader,
  StyledWrapper,
};

export default S;
