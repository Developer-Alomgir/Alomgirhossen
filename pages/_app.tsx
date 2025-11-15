import '../styles/globals.css'
import { Analytics } from '@vercel/analytics/react'
import Footer from '../components/Footer'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Footer />       {/* Sticky footer */}
      <Analytics />
    </>
  )
}
