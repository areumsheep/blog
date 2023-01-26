import * as React from 'react';
import { graphql, PageProps } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import App from 'App';
import { Layout } from 'components/Layout';
import { Typography } from 'components/@common/Typography';
import Seo from '../../components/Seo';
import MdxContent from 'components/MdxContent';
import type { ContentType } from 'types/content';

interface Response {
  mdx: ContentType;
}

const BlogPost = ({ data, children }: PageProps<Response>) => {
  const image = getImage((data as any).mdx.frontmatter.hero_image);
  return (
    <App>
      <Layout>
        <Typography variant="h2">{data.mdx.frontmatter.title}</Typography>
        <Typography variant="body2" color="livid300">
          {data.mdx.frontmatter.createdAt}
        </Typography>
        <MdxContent>{children}</MdxContent>
      </Layout>
    </App>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        createdAt(formatString: "MMMM D, YYYY")
      }
    }
  }
`;

export const Head = () => <Seo title="브라우저 동작 원리" />;

export default BlogPost;
