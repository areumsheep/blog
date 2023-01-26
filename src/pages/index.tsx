import { HeadFC } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';

import App from 'App';
import { Layout } from 'components/Layout';
import Seo from '../components/Seo';

const IndexPage = () => {
  return (
    <App>
      <Layout>
        <p>I'm making this by following the Gatsby Tutorial.</p>
        <StaticImage
          alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
          src="../images/icon.png"
        />
      </Layout>
    </App>
  );
};

export const Head: HeadFC = () => <Seo title="Home Page" />;

export default IndexPage;
