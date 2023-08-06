

import './globals.css'
import { DotGothic16, Questrial ,Silkscreen, Libre_Barcode_39_Extended } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import Background from '@/components/Background'
import MobileNav from '@/components/MobileNav'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Bars from '@/components/Bars'

const dotgothic = DotGothic16({ subsets: ['latin'], weight: '400' })
const questrial= Questrial({ subsets: ['latin'], weight: '400' })
const silkscreen = Silkscreen({ subsets: ['latin'], weight: '400' })
const barcode = Libre_Barcode_39_Extended({ subsets: ['latin'], weight: '400' })

export const metadata = {
    title: 'JAMES ELIAS',
    description: 'A minimal starter for Nextjs + React-three-fiber and Threejs.',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={questrial.className}>
                <main className="flex flex-col min-h-full items-center text-[#45517a]">
                    
                    <Background />
                    
                    <div className=" z-20 h-full w-full flex-col self-start">
                        {/*Title*/}
                        <div className="p-6 flex md:justify-start justify-between items-center static md:bg-none">
                            <Link
                                className="flex pointer-events-auto md:p-0"
                                href="/"
                            >
                                <h1 className='text-3xl md:text-8xl lg:text-9xl'>JAMES ELIAS</h1>
                            </Link>
                            <div className={silkscreen.className}>
                                <MobileNav />
                            </div>
                        </div>                 
                        <div className={`relative ${silkscreen.className}`}>
                            <Nav />
                            <div className='absolute top-10 right-6'>
                                <Bars width={150}/>
                            </div>
                        </div>
                    </div>

                    <div className={`hidden md:block absolute top-0 right-0 p-6 z-10 text-3xl ${barcode.className}`}>
                        abcd
                    </div>
                    
                    {/*content*/}
                    <div className={`z-10 max-w-5xl flex-grow flex items-center justify-center ${dotgothic.className}`}>
                        <div className='bg-gray-100/75 p-5'>
                            {children}
                        </div>
                    </div>
                    
                    <div className={`flex flex-row z-10 ${silkscreen.className} w-full justify-between items-end`}>
                        <div className={`${barcode.className} p-6`}>
                            ab &nbsp; e &nbsp; dkfj &nbsp; ae &nbsp; m
                        </div>
                        <Footer/>
                    </div>
                </main>
            </body>
        </html>
    )
}
