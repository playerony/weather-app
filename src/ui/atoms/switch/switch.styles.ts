import styled from 'styled-components';
import { size, cover, transitions } from 'polished';

import { radius, respondToMax } from '@infrastructure';

const StyledWrapper = styled.div`
  ${size(30, 60)}

  position: relative;
  display: inline-block;

  ${respondToMax.mobile`
    ${size(24, 48)}
  `}
`;

const StyledSlider = styled.span`
  ${cover()}
  ${transitions('0.3s ease')}

  cursor: pointer;
  border-radius: ${radius.large};
  background-color: ${({ theme }) => theme.color.primaryColor};

  &::before {
    ${size(24, 24)}
    ${transitions('0.3s ease')}

    left: 3px;
    bottom: 3px;
    position: absolute;

    content: '';
    background-color: white;
    border-radius: ${radius.large};

    ${respondToMax.mobile`
      ${size(20, 20)}

      left: 2px;
      bottom: 2px;
    `}
  }
`;

const StyledInput = styled.input`
  ${size(0, 0)}

  opacity: 0;

  &:checked + ${StyledSlider}:before {
    transform: translateX(30px);

    ${respondToMax.mobile`
      transform: translateX(24px);
    `}
  }
`;

const S = {
  StyledInput,
  StyledSlider,
  StyledWrapper,
};

export default S;
