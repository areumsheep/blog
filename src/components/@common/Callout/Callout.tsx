import React, { PropsWithChildren } from 'react';
import * as Styled from './Callout.styles';

const Callout = ({ children }: PropsWithChildren) => {
  return <Styled.Callout>{children}</Styled.Callout>;
};

Callout.Icon = ({ children }: PropsWithChildren) => {
  return <Styled.Icon>{children}</Styled.Icon>;
};
Callout.Description = ({ children }: PropsWithChildren) => {
  return <Styled.Description>{children}</Styled.Description>;
};

export default Callout;
