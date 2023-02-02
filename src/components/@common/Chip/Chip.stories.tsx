import React from 'react';
import type { ComponentStory } from '@storybook/react';

import Chip from './Chip';

export default {
  title: 'Common/Chip',
  component: Chip,
  argTypes: {
    color: {
      table: {
        disable: true,
      },
    },
    backgroundColor: {
      table: {
        disable: true,
      },
    },
  },
};

export const Primary: ComponentStory<typeof Chip> = (args) => <Chip {...args}>JavaScript</Chip>;

Primary.args = {
  color: 'black',
  backgroundColor: 'livid200',
};
