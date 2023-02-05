import * as React from 'react';

type SeoProps = {
  title?: string;
  description?: string;
  url?: string;
  image?: string;
};

const Seo = ({
  title = 'Miso :-)',
  description = '미소의 개발 블로그',
  image = 'https://avatars.githubusercontent.com/u/48716298?v=4',
  url,
}: SeoProps) => {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={title} />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </>
  );
};

export default Seo;
