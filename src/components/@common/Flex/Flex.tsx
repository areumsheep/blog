import React from 'react';
import type { FlexProps } from './Flex.types';
import * as Styled from './Flex.styles';

const Flex = React.forwardRef<HTMLDivElement, FlexProps>(
  (
    {
      gap,
      display = 'flex',
      flexDirection = 'row',
      justifyContent = 'center',
      alignItems = 'center',
      children,
      ...attributes
    },
    ref,
  ) => {
    return (
      <Styled.Flex
        gap={gap ?? 0}
        display={display}
        flexDirection={flexDirection}
        justifyContent={justifyContent}
        alignItems={alignItems}
        ref={ref}
        {...attributes}
      >
        {children}
      </Styled.Flex>
    );
  },
);

export default Flex;
