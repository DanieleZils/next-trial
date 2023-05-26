import Navbar from './components/navbar'
import './globals.css'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Becca',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} 
        suppressHydrationWarning={true}>
        < Navbar />
        {children}</body>
    </html>
  )
}

