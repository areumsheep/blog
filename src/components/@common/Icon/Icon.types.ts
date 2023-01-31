export const Variant = {
  circular: '50%',
  rounded: '10%',
  square: 'none',
} as const;

export interface IconProps {
  icon?: React.FC<React.SVGProps<SVGSVGElement>> | React.ReactElement;
  variant?: keyof typeof Variant;
}
