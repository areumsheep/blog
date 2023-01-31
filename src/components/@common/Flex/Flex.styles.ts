import styled from '@emotion/styled';
import type { FlexProps } from './Flex.types';

export const Flex = styled.div<FlexProps>`
  display: ${({ display }) => display};
  flex-direction: ${({ flexDirection }) => flexDirection};
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
`;
