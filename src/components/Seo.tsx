import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

type SeoProps = {
  title: string;
  description: string;
};
const Seo = ({ title, description }: SeoProps) => {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description || 'Miso의 개발 블로그'} />
    </>
  );
};

export default Seo;
