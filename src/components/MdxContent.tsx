import styled from '@emotion/styled';

const MdxContent = styled.article`
  max-width: 100%;
  overflow-wrap: break-word;

  /* 이미지 ---------------- */
  img {
    width: 100%;
    margin: 10px 0;
  }

  /* 타이틀 ---------------- */
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 25px;
    margin-bottom: 7px;
    padding: 3px;

    > a.anchor path {
      fill: ${({ theme }) => theme.color['primary']};
    }
  }

  /* 리스트 ---------------- */
  li > ul {
    margin-top: 5px;
  }
  ul,
  ol,
  .gatsby-resp-image-wrapper {
    margin: 16px 0;
    padding-left: 30px;
    li {
      line-height: 1.5;
      color: ${({ theme }) => theme.color['gray400']};
    }
  }
  div > ul,
  ol {
    margin: 0px;
    padding-left: 20px;

    li {
      margin-top: 6px;
    }
  }

  /* 링크 ---------------- */
  a {
    color: ${({ theme }) => theme.color['blue300']};

    &:hover {
      text-decoration: underline;
    }
  }

  aside {
    padding: 20px;
  }

  hr {
    margin: 30px 0;
  }
`;

export default MdxContent;
