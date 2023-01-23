import React from 'react';
import { variants, TypographyProps } from './Typography.types';
import * as Styled from './Typography.styles';

const Typography = React.forwardRef<
  HTMLHeadingElement | HTMLParagraphElement | HTMLSpanElement,
  TypographyProps
>(({ color = 'gray700', variant = 'body1', children, ...attributes }, ref) => {
  return (
    <Styled.Typography
      as={variants[variant].as}
      color={color}
      variant={variant}
      ref={ref}
      {...attributes}
    >
      {children}
    </Styled.Typography>
  );
});

export default Typography;
