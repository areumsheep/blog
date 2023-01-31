import styled from '@emotion/styled';
import { Variant, IconProps } from './Icon.types';

export const Icon = styled.span<IconProps>`
  border-radius: ${({ variant = 'circular' }) => Variant[variant]};
`;
