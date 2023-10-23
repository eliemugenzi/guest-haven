
import type { Metadata } from 'next'
import { Nunito_Sans } from 'next/font/google'
import './globals.css'
import TanstackProvider from './components/Providers/TanstackProvider';

const font = Nunito_Sans({  subsets: ['latin'] })


export const metadata: Metadata = {
  title: 'Guest Haven',
  description: 'Welcome to Guest Haven',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
       <TanstackProvider>
        {children}
       </TanstackProvider>
        </body>
    </html>
  )
}
