import { css } from '@emotion/react';

export const globalStyles = css`
  body,
  h1,
  h2,
  h3,
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
    user-select: none;
    cursor: pointer;
  }
  ol,
  ul,
  li {
    list-style: none;
  }
`;
