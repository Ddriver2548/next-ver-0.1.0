import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './components/navbar'
import Footer from '././footer'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'โปรแกรมแสดงโปสเตอร์หนัง',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        <div className=''>
          {children}
        </div>
        
        <Footer/>
        </body>
    </html>
  )
}
