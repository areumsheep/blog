import * as React from 'react';
import { graphql, Link, PageProps } from 'gatsby';

import App from 'App';
import { Layout } from 'components/Layout';
import Seo from '../../components/Seo';

const BlogPage = ({ data }: PageProps) => {
  return (
    <App>
      <Layout>
        {(data as any).allMdx.nodes.map((node: any) => (
          <article>
            <h2>
              <Link to={`/contents/${node.frontmatter.slug}`}>{node.frontmatter.title}</Link>
            </h2>
            <p>{node.frontmatter.date}</p>
            <p>{node.excerpt}</p>
          </article>
        ))}
      </Layout>
    </App>
  );
};

export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
        frontmatter {
          title
          date(formatString: "MMMM DD, YYYY")
          slug
        }
        id
        excerpt
      }
    }
  }
`;

export const Head = () => <Seo title="My Blog Posts" />;

export default BlogPage;
