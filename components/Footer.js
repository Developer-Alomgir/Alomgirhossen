import '../styles/globals.css'
import { Analytics } from '@vercel/analytics/react'  // ✅ Vercel Analytics import

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />   {/* ✅ Analytics setup */}
    </>
  )
}
