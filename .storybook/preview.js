import { css, Global, ThemeProvider } from '@emotion/react';
import { theme } from 'styles/theme';

const globalStyles = css`
  h1,
  h2,
  h3,
  h4,
  h5 {
    margin: 7px 0;
  }
  span {
    display: inline-block;
  }
`;

const withThemeProvider = (Story, context) => {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyles} />
      {Story(context)}
    </ThemeProvider>
  );
};

export const decorators = [withThemeProvider];
