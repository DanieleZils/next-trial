import Navbar from './components/navbar'
import './globals.css'
import { Raleway } from 'next/font/google'


// const inter = Inter({ subsets: ['latin'] })

const raleway = Raleway({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: 'Becca Kasdan',
  description: "Becca Kasdan's Website",
   icons: {
    icon: '/favicon.ico',
   }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={raleway.className}>
      <body 
        suppressHydrationWarning={true}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}

