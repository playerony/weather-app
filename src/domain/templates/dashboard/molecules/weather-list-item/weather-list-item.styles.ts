import styled from 'styled-components';

import { spacing } from '@infrastructure';

export const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0 ${spacing.small};

  & > *:not(:first-child) {
    padding-left: ${spacing.small};
  }
`;

const S = {
  StyledWrapper,
};

export default S;
