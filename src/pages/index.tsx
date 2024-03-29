import * as React from 'react';
import { graphql, HeadFC, PageProps } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import styled from '@emotion/styled';

import App from 'App';
import { Seo, Layout, LabeledIcon } from 'components';
import { Callout, Typography, Anchor, Chip } from 'components/@common';

import type { ContentType } from 'types/content';
import { getReadingTime } from 'utils/getReadingTime';

import Calendar from 'static/images/Calendar.inline.svg';
import Time from 'static/images/Time.inline.svg';

interface Response {
  allMdx: {
    nodes: ContentType[];
  };
}

const IndexPage = ({ data }: PageProps<Response>) => {
  const { nodes } = data.allMdx;

  return (
    <App>
      <Seo />
      <Layout>
        <Wrapper>
          <Callout>
            <Callout.Icon>
              <StaticImage src="../static/images/miso.jpeg" alt="미소의 세상 미소 캐릭터" />
            </Callout.Icon>
            <Callout.Description>
              <Typography variant="h3">미소</Typography>
              <Typography variant="body1" color="gray400">
                꾸준히 깊게 공부하기
              </Typography>
              <LinkWrapper>
                <Anchor href="https://github.com/areumsheep" variant="body2" color="gray400">
                  Github
                </Anchor>
                <Anchor href="https://velog.io/@reum107" variant="body2" color="gray400">
                  Velog
                </Anchor>
                <Anchor
                  href="https://www.linkedin.com/in/areumsheep/"
                  variant="body2"
                  color="gray400"
                >
                  LinkedIn
                </Anchor>
              </LinkWrapper>
            </Callout.Description>
          </Callout>
        </Wrapper>
        <Typography variant="h2" style={{ marginTop: '40px' }}>
          All Posts
        </Typography>
        <div>
          {nodes.map((node) => (
            <a key={node.id} href={`/contents/${node.frontmatter.slug}`}>
              <Article>
                <Typography variant="h3" color="gray600">
                  {node.frontmatter.title}
                </Typography>
                <Typography variant="body1" color="gray300">
                  {node.frontmatter.description}
                </Typography>
                <Detail>
                  <Tags>
                    {node.frontmatter.tags.map((tag) => (
                      <Chip key={tag}>{tag}</Chip>
                    ))}
                  </Tags>

                  <Sub>
                    <LabeledIcon icon={<Calendar />} label={node.frontmatter.createdAt} />
                    <LabeledIcon icon={<Time />} label={`${getReadingTime(node.body)}분`} />
                  </Sub>
                </Detail>
              </Article>
            </a>
          ))}
        </div>
      </Layout>
    </App>
  );
};

export default IndexPage;

export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { createdAt: DESC } }) {
      nodes {
        body
        frontmatter {
          slug
          title
          description
          tags
          createdAt(formatString: "YYYY년 MM월 DD일")
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
  /* align-items: center; */
`;

const LinkWrapper = styled(Flex)`
  column-gap: 8px;
  margin-top: 10px;
`;

const Article = styled.article`
  padding: 20px 15px;
  border-bottom: 1px solid ${({ theme }) => theme.color['livid50']};

  &:hover {
    background-color: ${({ theme }) => theme.color['secondary']};
    border-radius: 20px;
    transform: scale(0.98);
  }

  @media (max-width: 680px) {
    padding: 15px 5px;
  }
`;

const Detail = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;

  svg {
    margin-right: 3px;
  }
`;

const Tags = styled.div`
  display: flex;
  column-gap: 5px;
`;

const Tag = styled.div`
  padding: 3px 15px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.color['livid50']};
`;

const Sub = styled(Flex)`
  column-gap: 7px;
  align-items: center;
`;
