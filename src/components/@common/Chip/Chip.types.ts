import { HTMLAttributes } from 'react';
import { theme } from 'styles/theme';

export interface ChipProps extends HTMLAttributes<HTMLSpanElement> {
  color?: keyof typeof theme.color;
  backgroundColor?: keyof typeof theme.color;
  type?: 'filled' | 'outlined';
}
