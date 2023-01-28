import styled from '@emotion/styled';

const MdxContent = styled.div`
  img {
    width: 100%;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 30px;
    margin-bottom: 7px;
    padding: 3px;

    > a.anchor path {
      fill: white;
    }
  }

  h2 {
    background-color: ${({ theme }) => theme.color['blue100']};
  }
  h3 {
    background-color: ${({ theme }) => theme.color['gray50']};
  }
  h4 {
    background-color: ${({ theme }) => theme.color['green50']};
  }

  p {
    line-height: 1.5;
  }

  ul,
  ol,
  .gatsby-resp-image-wrapper {
    margin: 16px 0;
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

  li > ul {
    margin-top: 5px;
  }

  hr {
    height: 0.25em;
    margin: 24px 0;
    border: 0;

    background-color: #30363d;
  }

  ul,
  ol {
    padding-left: 30px;
    li {
      line-height: 1.5;
      color: ${({ theme }) => theme.color['gray400']};
    }
  }

  blockquote {
    position: relative;
    background-color: ${({ theme }) => theme.color['livid50']};

    margin-left: 0;
    margin-right: 0;
    margin-bottom: 16px;
    padding: 16px 32px;

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
  }
  blockquote:after {
    content: '"';

    position: absolute;
    bottom: -45px;
    right: 5px;

    font-size: 3em;
  }

  code {
    padding: 0.2em 0.4em;
    border-radius: 2px;

    font-size: 0.85em;
    white-space: break-spaces;
  }

  pre[class*='language-'] {
    margin-bottom: 16px;
  }

  pre > code {
    padding: unset;
    border-radius: unset;
    background-color: unset;
    color: unset;
  }

  a {
    color: ${({ theme }) => theme.color['blue300']};

    &:hover {
      text-decoration: underline;
    }
  }
`;

export default MdxContent;
