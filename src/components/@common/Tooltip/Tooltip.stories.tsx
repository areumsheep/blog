import React from 'react';
import type { Meta } from '@storybook/react';

// import { Button } from '../Button';
import Tooltip from './Tooltip';
import type { TooltipProps } from './Tooltip.types';

export default {
  title: 'Common/Tooltip',
  component: Tooltip,
  argTypes: {
    content: {
      type: 'string',
    },
    children: {
      type: 'string',
    },
  },
} as Meta;

export const Primary = ({ content, children }: TooltipProps) => (
  <Tooltip>
    <Tooltip.Trigger>[1]</Tooltip.Trigger>
    <Tooltip.Content>아ㄴ녕하세요?</Tooltip.Content>
  </Tooltip>
);

Primary.args = {
  children: 'Target',
  content: '툴팁 예제 입니다.',
};
