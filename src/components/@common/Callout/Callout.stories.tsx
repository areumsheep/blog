import React from 'react';
import type { ComponentStory } from '@storybook/react';

import Callout from './Callout';
import type { CalloutArgs } from './Callout.types';

export default {
  title: 'Common/Callout',
  component: Callout,
  argTypes: {
    iconChildren: {
      name: 'children',
      type: 'string',
      table: {
        category: 'Callout.Icon',
      },
    },
    descriptionChildren: {
      name: 'children',
      type: 'string',
      table: {
        category: 'Callout.Description',
      },
    },
  },
};

export const Primary: ComponentStory<typeof Callout> = ({
  iconChildren,
  descriptionChildren,
}: CalloutArgs) => (
  <Callout>
    {iconChildren && <Callout.Icon>{iconChildren}</Callout.Icon>}
    <Callout.Description>{descriptionChildren}</Callout.Description>
  </Callout>
);
Primary.args = {
  iconChildren: '⚠️',
  descriptionChildren:
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.',
};
