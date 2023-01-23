import { HTMLAttributes, ElementType } from 'react';
import { theme } from 'styles/theme';

export const FontWeights = {
  Light: 300,
  Regular: 400,
  Medium: 500,
  SemiBold: 700,
  Bold: 800,
  ExtraBold: 900,
};

const buildVariant = (
  as: ElementType,
  fontWeight = FontWeights.Regular,
  fontSize = 16,
  lineHeight = 1.2,
) => ({
  as,
  fontWeight,
  fontSize,
  lineHeight: lineHeight,
});

export const variants = {
  h1: buildVariant('h1', FontWeights.ExtraBold, 30, 1.2),
  h2: buildVariant('h2', FontWeights.ExtraBold, 25, 1.2),
  h3: buildVariant('h3', FontWeights.Bold, 20, 1.2),
  h4: buildVariant('h4', FontWeights.SemiBold, 18, 1.2),
  h5: buildVariant('h5', FontWeights.SemiBold, 16, 1.2),
  body1: buildVariant('p', FontWeights.Regular, 16, 1.2),
  body2: buildVariant('p', FontWeights.Regular, 13, 1.2),
  body3: buildVariant('p', FontWeights.Medium, 13, 2),
  subtitle1: buildVariant('span', FontWeights.SemiBold, 13, 1.2),
};

export interface TypographyProps
  extends HTMLAttributes<HTMLHeadingElement | HTMLParagraphElement | HTMLSpanElement> {
  color?: keyof typeof theme.color;
  variant?: keyof typeof variants;
}
