import * as React from 'react';
import { graphql, PageProps } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import App from 'App';
import { Layout } from 'components/Layout';
import Seo from '../../components/Seo';

const BlogPost = ({ data, children }: PageProps) => {
  const image = getImage((data as any).mdx.frontmatter.hero_image);
  return (
    <App>
      <Layout>{children}</Layout>
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

export const Head = () => <Seo title="cool blog posts" />;

export default BlogPost;
