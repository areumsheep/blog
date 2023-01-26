import * as React from 'react';
import { graphql, HeadFC, PageProps } from 'gatsby';
import styled from '@emotion/styled';

import App from 'App';
import { Layout } from 'components/Layout';
import { Callout } from 'components/@common/Callout';
import Seo from '../components/Seo';
import { Typography } from 'components/@common/Typography';
import type { ContentType } from 'types/content';

import MisoCharacter from 'images/miso.jpeg';

interface Response {
  allMdx: {
    nodes: ContentType[];
  };
}

const IndexPage = ({ data }: PageProps<Response>) => {
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
        <Typography variant="h2" style={{ marginTop: '40px' }}>
          All Posts
        </Typography>
        <div>
          {data?.allMdx.nodes.map((node) => (
            <a href={`/contents/${node.frontmatter.slug}`}>
              <Article>
                <Typography variant="h3" color="gray600">
                  {node.frontmatter.title}
                </Typography>
                <Typography variant="body1" color="gray300">
                  {node.frontmatter.description}
                </Typography>
                <Detail>
                  <Typography variant="body2" color="livid300">
                    {node.frontmatter.createdAt}
                  </Typography>
                </Detail>
              </Article>
            </a>
          ))}
        </div>
      </Layout>
    </App>
  );
};

export const Head: HeadFC = () => <Seo title="Miso :-)" />;

export default IndexPage;

export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { createdAt: DESC } }) {
      nodes {
        frontmatter {
          title
          description
          createdAt(formatString: "MMMM DD, YYYY")
          slug
        }
        id
        excerpt
      }
    }
  }
`;

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

const Article = styled.article`
  margin-top: 25px;
`;

const Detail = styled.div`
  display: flex;
  justify-content: flex-end;
  column-gap: 10px;
`;
