import { HTMLAttributes } from 'react';

export interface StackProps extends HTMLAttributes<HTMLDivElement> {
  display?: 'flex' | 'inline-flex';
  flexDirection?: 'column-reverse' | 'column' | 'row-reverse' | 'row';
  justifyContent?:
    | 'center'
    | 'flex-end'
    | 'flex-start'
    | 'space-around'
    | 'space-between'
    | 'space-evenly';
  alignItems?: 'baseline' | 'center' | 'flex-end' | 'flex-start' | 'stretch';
}
