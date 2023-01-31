import React, { PropsWithChildren } from 'react';
import * as Styled from './Chip.styles';
import { ChipProps } from './Chip.types';

const Chip = React.forwardRef<HTMLSpanElement, ChipProps>(
  ({ color = 'livid300', backgroundColor = 'livid50', type = 'filled', children }, ref) => {
    return (
      <Styled.Chip
        as="span"
        color={color}
        backgroundColor={backgroundColor}
        type={type}
        variant="subtitle1"
        ref={ref}
      >
        {children}
      </Styled.Chip>
    );
  },
);

export default Chip;
