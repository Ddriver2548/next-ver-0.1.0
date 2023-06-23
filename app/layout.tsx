import './globals.css'
import Navbar from './components/navbar'
import Footer from '././footer'


import { Prompt } from 'next/font/google'
 
const prompt = Prompt({
  weight: '400',
  subsets: ['latin'],
})

export const metadata = {
  title: 'Create Next App',
  description: 'โปรแกรมแสดงโปสเตอร์หนัง',
}

export  default async function RootLayout({
  
  children,
  
}: {
  children: React.ReactNode
}) {

 
  return (
    <html lang="en">
      <body className={prompt.className}>
        <Navbar/>
        <div className='container mx-auto '>
          {children}
        </div>
        
        <Footer/>
        </body>
    </html>
  )
}


function delay(timeout: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
}

