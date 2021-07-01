import styled from 'styled-components';

import { spacing } from '@infrastructure';

const StyledWrapper = styled.div`
  max-width: fit-content;
  padding: ${spacing.small} 0;
`;

const StyledItemsWrapper = styled.div`
  padding-top: ${spacing.small};
`;

const S = {
  StyledWrapper,
  StyledItemsWrapper,
};

export default S;
