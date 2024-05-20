import * as React from 'react';
import { Global, ThemeProvider } from '@emotion/react';
import { globalStyles } from './styles/global.style';
import theme from './styles/theme.style';
import ModalContextProvider from './contexts/ModalContext/ModalContext';

export default function Provider({ children }: React.PropsWithChildren) {
  return (
    <ThemeProvider theme={theme}>
      <ModalContextProvider>
        <Global styles={globalStyles} />
        {children}
        <div id="modal-root"></div>
      </ModalContextProvider>
    </ThemeProvider>
  );
}
