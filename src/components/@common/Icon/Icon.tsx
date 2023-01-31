import React from 'react';
import type { Component } from 'react';

import type { IconProps } from './Icon.types';
import * as Styled from './Icon.styles';

const Icon = ({ icon: Icon, variant = 'circular', ...attribute }: IconProps) => {
  const IconElement = Icon as unknown as typeof Component;
  return (
    <Styled.Icon variant={variant} {...attribute}>
      {typeof Icon === 'object' ? Icon : <IconElement />}
    </Styled.Icon>
  );
};
export default Icon;
