import Navbar from './components/navbar'
import './globals.css'
// import { Inter } from 'next/font/google'


// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Becca Kasdan',
  description: "Becca Kasdan's Website",
   icons: {
    icon: '/favicon.ico',
   }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body 
        suppressHydrationWarning={true}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}

