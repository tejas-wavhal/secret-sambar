import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/client/Header'
import Footer from '@/components/server/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Secret Sambar - South Indian Delights",
  description: "Welcome to Secret Sambar, your gateway to authentic South Indian cuisine. Explore our menu, savor exclusive offers, and embark on a culinary journey that captures the essence of South India.",
  // verification: {
  //   google: "Your_Google_Verification_Code"
  // },
  alternates: {
    canonical: "https://secretsambar.com",
    languages: {
      "en-IN": 'https://secretsambar.com/en-IN'
    }
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    images: 'https://secretsambar.com/logo.png',
    title: "Secret Sambar - South Indian Delights",
    description: "Welcome to Secret Sambar, your gateway to authentic South Indian cuisine. Explore our menu, savor exclusive offers, and embark on a culinary journey that captures the essence of South India.",
    siteName: "Secret Sambar"
  },
  twitter: {
    card: "summary_large_image",
    title: "Secret Sambar - South Indian Delights",
    description: "Welcome to Secret Sambar, your gateway to authentic South Indian cuisine. Explore our menu, savor exclusive offers, and embark on a culinary journey that captures the essence of South India.",
    images: 'https://secretsambar.com/logo.png'
  }
};


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
