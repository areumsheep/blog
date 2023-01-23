import styled from '@emotion/styled';
import { TypographyProps, variants } from './Typography.types';

export const Typography = styled.span<TypographyProps>`
  color: ${({ theme, color = 'black' }) => theme.color[color]};

  font-size: ${({ variant = 'body1' }) => variants[variant].fontSize}px;
  font-weight: ${({ variant = 'body1' }) => variants[variant].fontWeight};
  line-height: ${({ variant = 'body1' }) => variants[variant].lineHeight};
`;
