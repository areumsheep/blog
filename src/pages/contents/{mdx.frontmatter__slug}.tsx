import React from 'react';
import type { CSSProperties, PropsWithChildren } from 'react';
import { graphql, PageProps } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';

import App from 'App';
import { Seo, Layout, MdxContent, LabeledIcon, Comment } from 'components';
import { Typography, Callout, Flex } from 'components/@common';

import type { ContentType } from 'types/content';
import { getReadingTime } from 'utils/getReadingTime';
import { showViews, incrementView } from 'utils/fbase';
import { formatComma } from 'utils/format';

import Calendar from 'static/images/Calendar.inline.svg';
import Time from 'static/images/Time.inline.svg';
import View from 'static/images/View.inline.svg';

interface Response {
  mdx: ContentType;
}
interface CustomComponentProps {
  id?: string;
  style?: CSSProperties;
}

const customComponent = {
  h1: (props: PropsWithChildren<CustomComponentProps>) => <Typography variant="h2" {...props} />,
  h2: (props: PropsWithChildren<CustomComponentProps>) => <Typography variant="h3" {...props} />,
  h3: (props: PropsWithChildren<CustomComponentProps>) => <Typography variant="h4" {...props} />,
  h4: (props: PropsWithChildren<CustomComponentProps>) => <Typography variant="h5" {...props} />,
  p: (props: PropsWithChildren<CustomComponentProps>) => (
    <Typography variant="body1" color="gray400" lineHeight={1.5} {...props} />
  ),
  em: (props: PropsWithChildren<CustomComponentProps>) => (
    <Typography variant="body1" color="gray400" {...props} />
  ),
  blockquote: (props: PropsWithChildren<CustomComponentProps>) => (
    <Callout>
      <Callout.Description {...props} />
    </Callout>
  ),
  Callout: ({ icon, children }: PropsWithChildren<{ icon: string }>) => (
    <Callout>
      <Callout.Icon>{icon}</Callout.Icon>
      <Callout.Description>{children}</Callout.Description>
    </Callout>
  ),
};

const BlogPost = ({ data, location: { href }, children }: PageProps<Response>) => {
  const { slug } = data.mdx.frontmatter;
  const [views, setViews] = React.useState(0);

  React.useEffect(() => {
    showViews(slug)
      .then((snapshot) => {
        if (snapshot.exists()) {
          setViews(snapshot.val());
        }
      })
      .catch((error) => {
        console.error(error);
      });
    incrementView(slug);
  }, []);

  return (
    <App>
      <Seo
        title={data.mdx.frontmatter.title}
        description={data.mdx.frontmatter.description}
        url={href}
      />
      <Layout>
        <Typography variant="h1">{data.mdx.frontmatter.title}</Typography>
        <Flex justifyContent="space-between" style={{ marginTop: '5px' }}>
          <LabeledIcon icon={<Calendar />} label={data.mdx.frontmatter.createdAt} />

          <Flex gap={10}>
            <LabeledIcon icon={<Time />} label={`${getReadingTime(data.mdx.body)}분`} />
            <LabeledIcon icon={<View />} label={`${formatComma(views)}명의 사람이 읽어봤어요`} />
          </Flex>
        </Flex>
        <MDXProvider components={customComponent}>
          <MdxContent>{children}</MdxContent>
        </MDXProvider>
        <Comment />
      </Layout>
    </App>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        slug
        title
        description
        createdAt(formatString: "YYYY년 MM월 DD일")
      }
    }
  }
`;

export default BlogPost;
