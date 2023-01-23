import React, { PropsWithChildren } from 'react';
import { Global, ThemeProvider } from '@emotion/react';

import { globalStyles } from 'styles/globalStyles';
import { theme } from 'styles/theme';

const App = ({ children }: PropsWithChildren) => {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyles} />
      {children}
    </ThemeProvider>
  );
};

export default App;
