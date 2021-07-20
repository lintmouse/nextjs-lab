import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components';

import { darkTheme, GlobalStyles } from '../styles';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyles />

      <Component {...pageProps} />
    </ThemeProvider>
  );
}
export default MyApp
