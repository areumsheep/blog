import * as React from 'react';
import { graphql, PageProps } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';

import App from 'App';
import { Seo, Layout, MdxContent, LabeledIcon } from 'components';
import { Typography, Callout, Flex } from 'components/@common';

import type { ContentType } from 'types/content';
import { getReadingTime } from 'utils/getReadingTime';

import Calendar from 'images/Calendar.inline.svg';
import Time from 'images/Time.inline.svg';
import View from 'images/View.inline.svg';

interface Response {
  mdx: ContentType;
}

const BlogPost = ({ data, children }: PageProps<Response>) => {
  return (
    <App>
      <Layout>
        <Typography variant="h1">{data.mdx.frontmatter.title}</Typography>
        <Flex justifyContent="space-between" style={{ marginTop: '5px' }}>
          <LabeledIcon icon={<Calendar />} label={data.mdx.frontmatter.createdAt} />

          <Flex>
            <LabeledIcon icon={<Time />} label={`${getReadingTime(data.mdx.body)}분`} />
            <LabeledIcon icon={<View />} label={'300명의 사람이 읽어봤어요'} />
          </Flex>
        </Flex>
        <MDXProvider
          components={{
            h1: ({ children, id, style }) => (
              <Typography variant="h2" id={id} style={style}>
                {children}
              </Typography>
            ),
            h2: ({ children, id, style }) => (
              <Typography variant="h3" id={id} style={style}>
                {children}
              </Typography>
            ),
            h3: ({ children, id, style }) => (
              <Typography variant="h4" id={id} style={style}>
                {children}
              </Typography>
            ),
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
      body
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
