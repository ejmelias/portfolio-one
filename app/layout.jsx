

import './globals.css'
import { Inter } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import Background from '@/components/Background'
import MobileNav from '@/components/MobileNav'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Next.js + Three.js',
    description: 'A minimal starter for Nextjs + React-three-fiber and Threejs.',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <main className="flex flex-col min-h-full items-center ">
                    
                    <Background />
                    
                    <div className=" z-20 h-full w-full max-w-5xl flex-col">
                        {/*Title*/}
                        <div className="p-6 flex md:justify-center justify-between items-center bg-gradient-to-b from-white via-white dark:from-black dark:via-black static md:bg-none">
                            <Link
                                className="flex pointer-events-auto md:p-0"
                                href="/"
                            >
                                <h1 className='text-3xl md:text-8xl lg:text-9xl'>R3F + Next.js</h1>
                            </Link>
                            <MobileNav />
                        </div>                 

                        <Nav />

                    </div>
                    
                    {/*content*/}
                    <div className='z-10 max-w-5xl flex-grow flex items-center justify-center'>
                        <div className='rounded-md bg-gray-100/75 p-5'>
                            {children}
                        </div>
                    </div>

                    <Footer/>
                    
                </main>
            </body>
        </html>
    )
}
