import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';

import App from 'App';
import { Layout } from 'components/Layout';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <App>
      <Layout>Content가 될 부분</Layout>
    </App>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>MISO :-)</title>;
