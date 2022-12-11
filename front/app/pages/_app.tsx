import '../styles/globals.css'
import type { AppProps } from 'next/app'
import React from 'react'
import "tailwindcss/tailwind.css"

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
