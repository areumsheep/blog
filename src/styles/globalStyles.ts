import { css } from '@emotion/react';

export const globalStyles = css`
  body {
    font-family: 'Pretendard', sans-serif;
  }

  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  p,
  ol,
  ul {
    margin: 0;
    padding: 0;
  }
  button {
    cursor: pointer;
    border: none;
    color: inherit;
    background-color: transparent;
  }
  textarea,
  input {
    box-sizing: border-box;
    outline: none;
    border: none;
  }
  a {
    text-decoration: none;
    cursor: pointer;
    width: 100%;
  }
  svg {
    margin-right: 3px;
  }
`;
