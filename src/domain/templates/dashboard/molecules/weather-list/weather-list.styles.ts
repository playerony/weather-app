import styled from 'styled-components';

import { spacing } from '@infrastructure';

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  max-width: fit-content;
  padding: ${spacing.small} 0;

  & > * {
    padding-top: ${spacing.small};
  }
`;

const S = {
  StyledWrapper,
};

export default S;
