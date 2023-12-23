import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/client/Header'
import Footer from '@/components/server/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Secret Sambar - Home',
  description: 'Secret Sambar',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: "montserrat" }} className={`${inter.className}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
