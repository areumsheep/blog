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
        date(formatString: "MMMM D, YYYY")
        hero_image_alt
        hero_image_credit_link
        hero_image_credit_text
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`;

export const Head = () => <Seo title="cool blog posts" />;

export default BlogPost;
