import { AnchorHTMLAttributes } from 'react';

import { theme } from 'styles/theme';
import { variants } from 'components/@common/Typography/Typography.types';

export interface AnchorProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  color?: keyof typeof theme.color;
  variant?: keyof typeof variants;
}
