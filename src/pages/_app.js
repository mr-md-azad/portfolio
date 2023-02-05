import '@/styles/globals.scss'

import Navigation from './Navigation/Navigation'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navigation/>
      <Component {...pageProps} />
    </>
  )
}
