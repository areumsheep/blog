import React from 'react';

import { Typography } from 'components/@common/Typography';
import type { AnchorProps } from './Anchor.types';

const Anchor = React.forwardRef<HTMLAnchorElement, AnchorProps>(
  ({ href, target, color = 'gray700', variant = 'body1', children, ...attributes }, ref) => {
    return (
      <a ref={ref} href={href} target={target} {...attributes}>
        <Typography color={color} variant={variant}>
          {children}
        </Typography>
      </a>
    );
  },
);

export default Anchor;
