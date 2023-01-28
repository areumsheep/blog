import * as React from 'react';
import { graphql, PageProps } from 'gatsby';
import styled from '@emotion/styled';
import { MDXProvider } from '@mdx-js/react';

import App from 'App';
import { Layout } from 'components/Layout';
import { Typography } from 'components/@common/Typography';
import Seo from '../../components/Seo';
import MdxContent from 'components/MdxContent';
import type { ContentType } from 'types/content';
import { Callout } from 'components/@common/Callout';

import Calendar from 'images/Calendar.inline.svg';

interface Response {
  mdx: ContentType;
}

const BlogPost = ({ data, children }: PageProps<Response>) => {
  return (
    <App>
      <Layout>
        <Typography variant="h1">{data.mdx.frontmatter.title}</Typography>
        <Flex>
          <Calendar />
          <Typography variant="body2" color="livid300">
            {data.mdx.frontmatter.createdAt}
          </Typography>
        </Flex>
        <MDXProvider
          components={{
            h1: ({ children }) => <Typography variant="h2">{children}</Typography>,
            h2: ({ children }) => <Typography variant="h3">{children}</Typography>,
            h3: ({ children }) => <Typography variant="h4">{children}</Typography>,
            p: ({ children }) => (
              <Typography variant="body1" color="gray400">
                {children}
              </Typography>
            ),
            Callout: ({ children }) => (
              <Callout>
                <Callout.Description>{children}</Callout.Description>
              </Callout>
            ),
          }}
        >
          <MdxContent>{children}</MdxContent>
        </MDXProvider>
      </Layout>
    </App>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        createdAt(formatString: "YYYY년 MM월 DD일")
      }
    }
  }
`;

export const Head = () => (
  <Seo
    title="브라우저 동작 원리"
    description="크롬 브라우저는 어떻게 웹사이트를 화면에 그려줄까요?"
  />
);

export default BlogPost;

const Flex = styled.div`
  display: flex;
`;
