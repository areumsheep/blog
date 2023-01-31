import styled from '@emotion/styled';
import type { FlexProps } from './Flex.types';

export const Flex = styled.div<FlexProps>`
  gap: ${({ gap }) => gap}px;

  display: ${({ display }) => display};
  flex-direction: ${({ flexDirection }) => flexDirection};
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
`;
