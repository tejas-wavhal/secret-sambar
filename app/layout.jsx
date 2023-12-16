import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/client/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Secret Sambar - Home',
  description: 'Secret Sambar',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
