import 'styles/globals.css'
import type { AppProps } from 'next/app'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { wrapper } from 'store/store'


const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`
const theme = {
  colors: {
  },
}


function MyApp({ Component, pageProps }: AppProps) {
  return <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>      
        <Component {...pageProps} />
      </ThemeProvider>
  </>
}

export default wrapper.withRedux(MyApp);
