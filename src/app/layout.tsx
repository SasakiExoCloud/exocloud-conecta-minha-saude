import { NextPage } from 'next'
import { PropsWithChildren } from 'react'
import './globals.css'

const RootLayout: NextPage<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

export default RootLayout
