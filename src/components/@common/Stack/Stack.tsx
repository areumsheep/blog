import React from 'react';
import { Flex } from 'components/@common';
import { FlexProps } from '../Flex/Flex.types';

const Stack = React.forwardRef<HTMLDivElement, FlexProps>(
  (
    {
      display = 'flex',
      flexDirection = 'column',
      justifyContent = 'center',
      alignItems = 'center',
      children,
      ...attributes
    },
    ref,
  ) => {
    return (
      <Flex
        display={display}
        flexDirection={flexDirection}
        justifyContent={justifyContent}
        alignItems={alignItems}
        ref={ref}
        {...attributes}
      >
        {children}
      </Flex>
    );
  },
);

export default Stack;
