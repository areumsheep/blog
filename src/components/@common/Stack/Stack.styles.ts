import styled from '@emotion/styled';
import { StackProps } from './Stack.types';

export const Stack = styled.div<StackProps>`
  display: ${({ display }) => display};
  flex-direction: ${({ flexDirection }) => flexDirection};
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
`;
