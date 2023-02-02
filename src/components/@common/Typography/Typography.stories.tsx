import React from 'react';
import type { ComponentStory, Story } from '@storybook/react';

import Typography from './Typography';
import { variants } from './Typography.types';

import { Stack } from 'components/@common/Stack';

export default {
  title: 'Common/Typography',
  component: Typography,
  argTypes: {
    as: {
      table: {
        disable: true,
      },
    },
    variant: {
      control: { type: 'radio', options: Object.keys(variants) },
    },
  },
};

export const Primary: ComponentStory<typeof Typography> = (args) => (
  <Typography {...args}>미소 블로그 Typography 컴포넌트입니다.</Typography>
);

Primary.args = {
  variant: 'body1',
  color: 'gray700',
};

export const Overview: Story<{}> = () => (
  <Stack alignItems="flex-start" style={{ width: '50%' }}>
    <Typography variant="h1">h1. Heading</Typography>
    <Typography variant="h2">h2. Heading</Typography>
    <Typography variant="h3">h3. Heading</Typography>
    <Typography variant="h4">h4. Heading</Typography>
    <Typography variant="h5">h5. Heading</Typography>
    <Typography variant="body1">
      body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde
      suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
      dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.{' '}
    </Typography>
    <Typography variant="body2">
      body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde
      suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
      dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.{' '}
    </Typography>
    <Typography variant="body3">
      body3. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde
      suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
      dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.{' '}
    </Typography>
    <Typography variant="subtitle1">
      subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
      unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
      dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.{' '}
    </Typography>
  </Stack>
);
