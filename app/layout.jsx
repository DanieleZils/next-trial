import Navbar from './components/navbar'
import './globals.css'
import { Cormorant_Garamond, Plus_Jakarta_Sans } from 'next/font/google'
import Footer from './components/footer';
import {Analytics} from "@vercel/analytics/react"


const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-cormorant',
})

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jakarta',
})

export const metadata = {
  metadataBase: 'https://beccakasdanviolin.com',
  title: 'Becca Kasdan',
  description: "Becca Kasdan's Official Website",
   icons: {
    icon: '/favicon.ico',
   },
  openGraph : {
    title : 'Becca Kasdan',
    description : "Becca Kasdan's Official Website",
    images : [
        {url: 'https://beccakasdanviolin.com/homepic-2.jpg', width: 800, height: 600, alt: 'Becca Kasdan'}
    ],
    type: 'website',
}
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jakarta.variable} bg-background`} suppressHydrationWarning={true}>
      <body className="font-sans bg-background text-foreground antialiased">
        <Navbar />
        <div className='row-content'>
        {children}
        <Analytics/>
        </div>
        <Footer hideOnMobile={true}/>
      </body>
    </html>
  )
}

