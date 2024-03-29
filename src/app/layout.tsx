import './globals.css'
import type { Metadata } from 'next'
import { Inter, Urbanist } from 'next/font/google'
import { Footer, Header } from '@/components'

const inter = Inter({ subsets: ['latin'] });

const urbanist = Urbanist({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en" >
      <body className={urbanist.className}>
        <Header />
          <div className="site">
            {children}
          </div>
        <Footer />
      </body>
    </html>
  )
}
