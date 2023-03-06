import type { AppProps } from 'next/app'
import OnMetas from '@onmetas/next'

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <OnMetas />

    <Component {...pageProps} />
  </>
)

export default App
