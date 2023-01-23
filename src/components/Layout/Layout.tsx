import React, { PropsWithChildren } from 'react';

import { Typography } from 'components/@common/Typography';
import * as Styled from './Layout.styles';

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <Styled.Wrapper>
      <Styled.HeaderWrapper>
        <Styled.HeaderContent>
          <Typography variant="h1" color="primary">
            MISO :-)
          </Typography>
          <Styled.Nav>
            <Typography variant="body1">ABOUT</Typography>
            <Typography variant="body1">COLOR</Typography>
            <Typography variant="body1">SNIPPETS</Typography>
          </Styled.Nav>
        </Styled.HeaderContent>
      </Styled.HeaderWrapper>

      <Styled.Main>{children}</Styled.Main>
    </Styled.Wrapper>
  );
};

export default Layout;
