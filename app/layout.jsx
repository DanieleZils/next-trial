import Navbar from './components/navbar'
import './globals.css'
import { Raleway } from 'next/font/google'
import Footer from './components/footer';


// const inter = Inter({ subsets: ['latin'] })

const raleway = Raleway({
  subsets: ['latin'],
  display: 'swap',
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
    <html lang="en" className={raleway.className} suppressHydrationWarning={true}>
      <body className="grid grid-rows-layout-h-screen">
        <Navbar />
        <div className='row-content'>
        {children}
        </div>
        <Footer hideOnMobile={true}/>
      </body>
    </html>
  )
}

