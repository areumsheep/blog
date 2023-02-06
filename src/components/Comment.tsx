import React, { useEffect, useRef } from 'react';

function Comments() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scriptTag = document.createElement('script');
    const attrs = {
      src: 'https://giscus.app/client.js',
      'data-repo': 'areumsheep/blog',
      'data-repo-id': 'R_kgDOIxp9-A',
      'data-category': 'General',
      'data-category-id': 'DIC_kwDOIxp9-M4CT2b-',
      'data-mapping': 'pathname',
      'data-strict': '0',
      'data-reactions-enabled': '1',
      'data-emit-metadata': '0',
      'data-input-position': 'top',
      'data-theme': 'preferred_color_scheme',
      'data-lang': 'ko',
      crossorigin: 'anonymous',
      async: 'true',
    };
    Object.entries(attrs).forEach(([key, value]) => {
      scriptTag.setAttribute(key, value);
    });
    ref.current?.appendChild(scriptTag);
  }, []);

  return <div id="comments" ref={ref} />;
}

export default Comments;
