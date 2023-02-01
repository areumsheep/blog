import React from 'react';
import { variants, TypographyProps } from './Typography.types';
import * as Styled from './Typography.styles';

const Typography = React.forwardRef<
  HTMLHeadingElement | HTMLParagraphElement | HTMLSpanElement,
  TypographyProps
>(({ as, color = 'gray700', variant = 'body1', lineHeight, children, ...attributes }, ref) => {
  return (
    <Styled.Typography
      as={as || variants[variant].as}
      color={color}
      variant={variant}
      lineHeight={lineHeight}
      ref={ref}
      {...attributes}
    >
      {children}
    </Styled.Typography>
  );
});

export default Typography;
