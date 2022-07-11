import { AppProps } from 'next/app'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="app">
      <div className="blur" style={{ top: '-18%', right: 0 }}></div>
      <div className="blur" style={{ top: '36%', left: '-8rem' }}></div>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
