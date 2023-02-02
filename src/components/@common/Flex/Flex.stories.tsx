import React from 'react';
import { ComponentStory } from '@storybook/react';
import styled from '@emotion/styled';

import Flex from './Flex';

export default {
  title: 'Common/Flex',
  component: Flex,
  argTypes: {
    justifyContent: {
      control: {
        type: 'radio',
        options: [
          'center',
          'flex-end',
          'flex-start',
          'space-around',
          'space-between',
          'space-evenly',
        ],
      },
    },
  },
};

export const Primary: ComponentStory<typeof Flex> = (args) => (
  <Flex {...args}>
    <Box1 />
    <Box2 />
    <Box3 />
  </Flex>
);

const Box1 = styled.div`
  width: 300px;
  height: 100px;
  background-color: red;
`;
const Box2 = styled.div`
  width: 200px;
  height: 200px;
  background-color: green;
`;
const Box3 = styled.div`
  width: 100px;
  height: 150px;
  background-color: blue;
`;
