import { ThemeProvider } from '@emotion/react';
import { theme } from 'styles/theme';

const withThemeProvider = (Story, context) => {
  return <ThemeProvider theme={theme}>{Story(context)}</ThemeProvider>;
};

export const decorators = [withThemeProvider];
