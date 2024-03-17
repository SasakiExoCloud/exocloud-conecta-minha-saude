import { AppProps } from 'next/app'
import React from 'react'

import { UserProvider } from '../contexts/UserContext'

const MyApp = ({ Component, pageProps }: AppProps) => {
  console.log('Renderizando MyApp')

  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  )
}

export default MyApp
