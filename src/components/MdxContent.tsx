import styled from '@emotion/styled';

const MdxContent = styled.div`
  font-size: 16px;
  line-height: 1.5;

  p {
    margin-top: 0;
    margin-bottom: 16px;
  }

  img {
    width: 100%;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 24px;
    margin-bottom: 16px;
    line-height: 1.25;
    font-weight: 600;

    > a.anchor path {
      fill: white;
    }
  }

  h1 {
    padding-bottom: 0.3em;
    border-bottom: 1px solid #21262d;
    font-size: 2.125em;
  }

  h2 {
    padding-bottom: 0.3em;
    border-bottom: 1px solid #21262d;
    font-size: 1.625em;
  }

  h3 {
    font-size: 1.5em;
  }

  h4 {
    font-size: 1.25em;
  }

  h5 {
    font-size: 1em;
  }

  h6 {
    font-size: 0.9375em;
  }

  ul,
  ol,
  .gatsby-resp-image-wrapper {
    margin-bottom: 16px;
  }

  table {
    width: max-content;
    max-width: 100%;
    margin-bottom: 16px;
    border-collapse: collapse;
    tr {
      border-top: 1px solid #21262d;
    }
    td,
    th {
      padding: 6px 13px;
      border: 1px solid #30363d;
    }
  }

  hr {
    height: 0.25em;
    margin: 24px 0;
    border: 0;

    background-color: #30363d;
  }

  li > ul,
  li > ol {
    margin-top: 0;
    margin-bottom: 0;
  }

  blockquote {
    position: relative;

    margin-left: 0;
    margin-right: 0;
    margin-bottom: 16px;
    padding: 16px 32px;
    /* border-left: 1px solid ${(p) => p.theme.colors.blockquoteBorder}; */
    border-left-width: 10px;

    /* background-color: ${(p) => p.theme.colors.blockquote}; */

    > :first-child {
      margin-top: 0;
    }
    > :last-child {
      margin-bottom: 0;
    }
    > ul,
    > ol {
      padding-left: 20px;
    }
  }

  blockquote:before {
    content: '"';

    position: absolute;
    top: -10px;
    left: 5px;

    font-size: 3em;
    /* color: ${(p) => p.theme.colors.blockquoteBorder}; */
  }
  blockquote:after {
    content: '"';

    position: absolute;
    bottom: -30px;
    right: 5px;

    font-size: 3em;
    /* color: ${(p) => p.theme.colors.blockquoteBorder}; */
  }

  code {
    padding: 0.2em 0.4em;
    border-radius: 2px;

    font-size: 0.85em;

    /* background-color: ${(p) => p.theme.colors.code};
    color: ${(p) => p.theme.colors.onCode}; */
    white-space: break-spaces;
  }

  pre[class*='language-'] {
    margin-bottom: 16px;

    /* overflow-x: auto; */
  }

  pre > code {
    padding: unset;
    border-radius: unset;
    background-color: unset;
    color: unset;
  }
  aside {
    background-color: ${({ theme }) => theme.color['livid50']};
    border-radius: 20px;
    padding: 18px 20px;
    margin-bottom: 25px;
  }

  li {
    &::marker {
      padding-left: 20px;
    }
  }
`;

export default MdxContent;
