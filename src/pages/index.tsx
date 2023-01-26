import * as React from 'react';
import { HeadFC } from 'gatsby';
import styled from '@emotion/styled';

import App from 'App';
import { Layout } from 'components/Layout';
import { Callout } from 'components/@common/Callout';
import Seo from '../components/Seo';
import { Typography } from 'components/@common/Typography';

import MisoCharacter from 'images/miso.jpeg';

const IndexPage = () => {
  return (
    <App>
      <Layout>
        <Wrapper>
          <Callout>
            <Callout.Icon>
              <img src={MisoCharacter} alt="미소의 세상 미소 캐릭터" width={70} />
            </Callout.Icon>
            <Callout.Description>
              <Typography variant="h3">미소</Typography>
              <Typography variant="body1" color="gray400">
                꾸준히 깊게 공부하기
              </Typography>
              <Flex>
                <a href="https://github.com/areumsheep">
                  <Typography variant="body2" color="gray400">
                    Github
                  </Typography>
                </a>
                <a href="https://www.linkedin.com/in/%EC%95%84%EB%A6%84-%EC%96%91-74b140236/">
                  <Typography variant="body2" color="gray400">
                    LinkedIn
                  </Typography>
                </a>
              </Flex>
            </Callout.Description>
          </Callout>
        </Wrapper>
      </Layout>
    </App>
  );
};

export const Head: HeadFC = () => <Seo title="Miso :-)" />;

export default IndexPage;

const Wrapper = styled.div`
  img {
    width: 95px;
    height: 95px;
    object-fit: cover;
    border: 5px solid ${({ theme }) => theme.color['primary']};
  }
  a {
    text-decoration: underline;
  }
`;

const Flex = styled.div`
  display: flex;
  column-gap: 8px;
  margin-top: 10px;
`;
